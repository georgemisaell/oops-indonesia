import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { dummyProducts } from '../../data/products';

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchedProduct = dummyProducts.find((p) => p.id === parseInt(id));
    setProduct(fetchedProduct);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-gray-700">Memuat detail produk...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Produk tidak ditemukan.</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          Kembali ke halaman produk
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden md:flex md:items-center"
        >
          <div className="md:w-1/2">
            <img
              src={product.imageUrl || `https://placehold.co/600x450/F3F4F6/1F2937?text=${product.name.replace(/ /g, '+')}`}
              alt={product.name}
              className="w-full h-96 object-cover md:h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x450/F3F4F6/1F2937?text=${product.name.replace(/ /g, '+')}`;
              }}
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
            <p className="text-3xl font-bold text-black mb-6">Rp{product.price.toLocaleString('id-ID')}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Spesifikasi:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.specs &&
                  product.specs.map((spec, index) => <li key={index}>{spec}</li>)}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors text-lg font-semibold">
                Tambahkan ke Keranjang
              </button>
              <Link
                to="/products"
                className="flex-1 text-center border border-gray-300 text-gray-800 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                Kembali ke Daftar Produk
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailProductPage;