import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ManageTransactions = () => {
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
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Kelola Transaksi</h1>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Daftar Transaksi</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                <div>
                  <h4 className="text-lg font-semibold">Transaksi #1</h4>
                  <p className="text-gray-600">Produk: Naik Air Zoom, Adibas Ultraboost</p>
                  <p className="text-gray-600">Total: Rp4,800,000</p>
                  <p className="text-gray-600">Tanggal: July 10, 2023</p>
                </div>
                <select className="p-2 border border-gray-300 rounded-md">
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                <div>
                  <h4 className="text-lg font-semibold">Transaksi #2</h4>
                  <p className="text-gray-600">Produk: Puma RS-X</p>
                  <p className="text-gray-600">Total: Rp2,200,000</p>
                  <p className="text-gray-600">Tanggal: August 5, 2023</p>
                </div>
                <select className="p-2 border border-gray-300 rounded-md">
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManageTransactions;