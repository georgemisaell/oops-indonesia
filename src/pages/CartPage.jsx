import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { dummyProducts } from '../data/products';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = dummyProducts.find((p) => p.id === item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <h1 className="text-5xl font-extrabold mb-4 text-black">Keranjang Belanja</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Tinjau item yang Anda tambahkan ke keranjang sebelum checkout.
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
            <div className="grid grid-cols-1 gap-8">
              {cartItems.map((item) => {
                const product = dummyProducts.find((p) => p.id === item.id);
                if (!product) return null;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center border border-gray-200"
                  >
                    <img
                      src={
                        product.imageUrl ||
                        `https://placehold.co/150x150/F3F4F6/1F2937?text=${product.name.replace(/ /g, '+')}`
                      }
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/150x150/F3F4F6/1F2937?text=${product.name.replace(/ /g, '+')}`;
                      }}
                    />
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{product.brand}</p>
                      <p className="text-gray-900 font-bold text-lg mb-4">
                        Rp{(product.price * item.quantity).toLocaleString('id-ID')}
                      </p>
                      <div className="flex items-center justify-center sm:justify-start mb-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:underline text-sm"
                      >
                        Hapus
                      </button>
                    </div>
                  </motion.div>
                );
              })}
              <div className="mt-8 text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Total: Rp{calculateTotal().toLocaleString('id-ID')}
                </h3>
                <Link
                  to="/checkout"
                  className="inline-block bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors text-lg font-semibold"
                >
                  Lanjut ke Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;