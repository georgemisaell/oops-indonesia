// ProductCard.jsx (Make sure you also import { Link } from 'react-router-dom'; if this is a separate file)
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link

// Komponen Card Produk individual
const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Placeholder gambar produk */}
      <img
        src={product.imageUrl || `https://placehold.co/400x300/F3F4F6/1F2937?text=${product.name.replace(/ /g, '+')}`}
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          // Fallback jika gambar tidak tersedia atau gagal dimuat
          e.target.onerror = null;
          e.target.src = `https://placehold.co/400x300/F3F4F6/1F2937?text=${product.name.replace(/ /g, '+')}`;
        }}
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <p className="text-gray-900 font-bold text-lg mb-4">Rp{product.price.toLocaleString('id-ID')}</p>
        <Link to={`/product/${product.id}`} className="block w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors text-center">
          Lihat Detail
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;