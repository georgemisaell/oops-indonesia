import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { dummyProducts } from '../data/products';

const CheckoutPage = () => {
  // Sample cart state (same as CartPage.jsx for consistency)
  const [cartItems, setCartItems] = useState([
    { id: 1, quantity: 2 }, // Example: Naik Air Zoom, qty 2
    { id: 3, quantity: 1 }, // Example: Adibas Ultraboost, qty 1
  ]);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'credit-card',
  });

  const navigate = useNavigate();

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = dummyProducts.find((p) => p.id === item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful checkout
    alert('Pesanan berhasil diproses! (Ini adalah simulasi)');
    setCartItems([]); // Clear cart
    navigate('/products'); // Redirect to products page
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <section className="py-20 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-black">Checkout</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Lengkapi detail pengiriman dan pembayaran untuk menyelesaikan pesanan Anda.
          </p>
        </motion.div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Keranjang Anda kosong
              </h2>
              <Link
                to="/products"
                className="inline-block bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors text-lg font-semibold"
              >
                Jelajahi Produk
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8 border border-gray-200"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Detail Pengiriman</h2>
                <div
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="fullName">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
                      Alamat
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2" htmlFor="city">
                        Kota
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2" htmlFor="postalCode">
                        Kode Pos
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Metode Pembayaran</label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="credit-card">Kartu Kredit</option>
                      <option value="bank-transfer">Transfer Bank</option>
                      <option value="cod">Bayar di Tempat (COD)</option>
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors text-lg font-semibold"
                    >
                      Selesaikan Pesanan
                    </button>
                    <Link
                      to="/cart"
                      className="flex-1 text-center border border-gray-300 text-gray-800 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
                    >
                      Kembali ke Keranjang
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* Order Summary Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Ringkasan Pesanan</h2>
                {cartItems.map((item) => {
                  const product = dummyProducts.find((p) => p.id === item.id);
                  if (!product) return null;
                  return (
                    <div key={item.id} className="flex items-center mb-4">
                      <img
                        src={
                          product.imageUrl ||
                          `https://placehold.co/100x100/F3F4F6/1F2937?text=${product.name.replace(/ /g, '+')}`
                        }
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/100x100/F3F4F6/1F2937?text=${product.name.replace(/ /g, '+')}`;
                        }}
                      />
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600">Jumlah: {item.quantity}</p>
                        <p className="text-gray-900 font-bold">
                          Rp{(product.price * item.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Total: Rp{calculateTotal().toLocaleString('id-ID')}
                  </h3>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;