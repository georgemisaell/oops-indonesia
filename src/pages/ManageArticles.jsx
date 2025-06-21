import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ManageArticles = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/4 bg-white rounded-lg shadow-lg p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Menu</h2>
          <nav className="space-y-4">
            {/* Updated Link paths for sidebar */}
            <Link to="/dashboard" className="block text-lg font-medium text-black hover:text-gray-600">
              Dashboard
            </Link>
            <Link to="/manage-articles" className="block text-lg font-medium text-black hover:text-gray-600">
              Kelola Artikel
            </Link>
            <Link to="/manage-products" className="block text-lg font-medium text-black hover:text-gray-600">
              Kelola Produk
            </Link>
            <Link to="/manage-users" className="block text-lg font-medium text-black hover:text-gray-600">
              Kelola Pengguna
            </Link>
            <Link to="/manage-transactions" className="block text-lg font-medium text-black hover:text-gray-600">
              Kelola Transaksi
            </Link>
          </nav>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-3/4 bg-white rounded-lg shadow-lg p-8 border border-gray-200"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Kelola Artikel</h1>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tambah Artikel</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Judul Artikel"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Excerpt"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Kategori"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="URL Gambar"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Penulis"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <button
                className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800"
              >
                Tambah Artikel
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Daftar Artikel</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                <div>
                  <h4 className="text-lg font-semibold">The History of Sneaker Culture</h4>
                  <p className="text-gray-600">Culture • May 15, 2023</p>
                </div>
                <div className="space-x-2">
                  <Link to="/article/1" className="text-blue-600 hover:underline">
                    Lihat
                  </Link>
                  <button className="text-red-600 hover:underline">Hapus</button>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                <div>
                  <h4 className="text-lg font-semibold">How to Spot Fake Sneakers</h4>
                  <p className="text-gray-600">Guides • June 2, 2023</p>
                </div>
                <div className="space-x-2">
                  <Link to="/article/2" className="text-blue-600 hover:underline">
                    Lihat
                  </Link>
                  <button className="text-red-600 hover:underline">Hapus</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManageArticles;