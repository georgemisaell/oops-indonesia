import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
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
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-3/4 bg-white rounded-lg shadow-lg p-8 border border-gray-200"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Admin Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Artikel</h3>
              <p className="text-3xl font-bold text-black">12</p>
              {/* Updated Link paths for dashboard cards */}
              <Link to="/manage-articles" className="mt-4 inline-block text-blue-600 hover:underline">
                Lihat Artikel
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Produk</h3>
              <p className="text-3xl font-bold text-black">8</p>
              <Link to="/manage-products" className="mt-4 inline-block text-blue-600 hover:underline">
                Lihat Produk
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Pengguna</h3>
              <p className="text-3xl font-bold text-black">3</p>
              <Link to="/manage-users" className="mt-4 inline-block text-blue-600 hover:underline">
                Lihat Pengguna
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Transaksi</h3>
              <p className="text-3xl font-bold text-black">2</p>
              <Link to="/manage-transactions" className="mt-4 inline-block text-blue-600 hover:underline">
                Lihat Transaksi
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;