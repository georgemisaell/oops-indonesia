import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { dummyProducts } from '../data/products';
import ProductCard from '../components/ProductPage/ProductCard'; // Impor ProductCard

// Komponen Filter Brand
const BrandFilter = ({ brands, activeBrand, onSelectBrand }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => onSelectBrand('Semua')}
        className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300
          ${activeBrand === 'Semua' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Semua
      </button>
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onSelectBrand(brand)}
          className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300
            ${activeBrand === brand ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
};

// Komponen ProductList
const ProductList = () => {
  const [activeBrand, setActiveBrand] = useState('Semua');
  const availableBrands = [...new Set(dummyProducts.map((p) => p.brand))];
  const filteredProducts =
    activeBrand === 'Semua'
      ? dummyProducts
      : dummyProducts.filter((product) => product.brand === activeBrand);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="py-20 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-black">Koleksi Sneakers Kami</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Temukan gaya Anda dengan pilihan sneakers terbaik dari merek-merek terkemuka.
          </p>
        </motion.div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-black">Jelajahi Produk</h2>
          <BrandFilter
            brands={availableBrands}
            activeBrand={activeBrand}
            onSelectBrand={setActiveBrand}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-600 text-lg mt-10">
              Tidak ada produk yang ditemukan untuk merek ini.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductList; // Ekspor sebagai ProductList (atau ProductPage)