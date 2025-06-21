"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const sampleTransactions = [
  {
    id: "TRX001",
    date: "2023-12-15",
    items: [
      { name: "Naik Air Zoom", quantity: 1, price: 1200000 },
      { name: "Adibas Ultraboost", quantity: 1, price: 1500000 },
    ],
    total: 2700000,
    status: "Selesai",
    paymentMethod: "Kartu Kredit",
    shippingAddress: "Jl. Sudirman No. 123, Jakarta Pusat",
  },
  {
    id: "TRX002",
    date: "2023-12-10",
    items: [{ name: "Jordunk Retro High", quantity: 2, price: 1800000 }],
    total: 3600000,
    status: "Dalam Pengiriman",
    paymentMethod: "Transfer Bank",
    shippingAddress: "Jl. Thamrin No. 456, Jakarta Pusat",
  },
  {
    id: "TRX003",
    date: "2023-12-05",
    items: [{ name: "Oops Classic White", quantity: 1, price: 900000 }],
    total: 900000,
    status: "Selesai",
    paymentMethod: "COD",
    shippingAddress: "Jl. Gatot Subroto No. 789, Jakarta Selatan",
  },
  {
    id: "TRX004",
    date: "2023-11-28",
    items: [
      { name: "Naik Air Force 1", quantity: 1, price: 1100000 },
      { name: "Adibas Stan Smith", quantity: 1, price: 800000 },
    ],
    total: 1900000,
    status: "Dibatalkan",
    paymentMethod: "Kartu Kredit",
    shippingAddress: "Jl. Kuningan No. 321, Jakarta Selatan",
  },
  {
    id: "TRX005",
    date: "2023-11-20",
    items: [{ name: "Jordunk Low", quantity: 1, price: 1300000 }],
    total: 1300000,
    status: "Selesai",
    paymentMethod: "Transfer Bank",
    shippingAddress: "Jl. Kemang No. 654, Jakarta Selatan",
  },
]

const HistoryTransaction = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState("Semua")
  const [expandedTransaction, setExpandedTransaction] = useState(null)

  const statusOptions = ["Semua", "Selesai", "Dalam Pengiriman", "Dibatalkan"]

  useEffect(() => {
    window.scrollTo(0, 0)
    // Simulate loading
    setTimeout(() => {
      setTransactions(sampleTransactions)
      setLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-800"
      case "Dalam Pengiriman":
        return "bg-blue-100 text-blue-800"
      case "Dibatalkan":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredTransactions =
    selectedStatus === "Semua"
      ? transactions
      : transactions.filter((transaction) => transaction.status === selectedStatus)

  const toggleTransactionDetails = (transactionId) => {
    setExpandedTransaction(expandedTransaction === transactionId ? null : transactionId)
  }

  if (loading) {
    return (
      <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-black animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-4 h-4 rounded-full bg-black animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-4 h-4 rounded-full bg-black animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
          <p className="mt-4 text-gray-600">Memuat riwayat transaksi...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl font-extrabold mb-4">Riwayat Transaksi</h1>
          <p className="text-xl max-w-2xl mx-auto">Lihat semua transaksi pembelian Anda di Oops Indonesia</p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {statusOptions.map((status, index) => (
              <motion.button
                key={status}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedStatus === status ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTransactions.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tidak ada transaksi ditemukan</h2>
              <p className="text-gray-600 mb-6">
                {selectedStatus === "Semua"
                  ? "Anda belum memiliki riwayat transaksi."
                  : `Tidak ada transaksi dengan status "${selectedStatus}".`}
              </p>
              <Link
                to="/products"
                className="inline-block bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors text-lg font-semibold"
              >
                Mulai Belanja
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTransactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                >
                  {/* Transaction Header */}
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleTransactionDetails(transaction.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-bold text-gray-800">#{transaction.id}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}
                          >
                            {transaction.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">
                          Tanggal:{" "}
                          {new Date(transaction.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-gray-600">
                          {transaction.items.length} item • {transaction.paymentMethod}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          Rp{transaction.total.toLocaleString("id-ID")}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          {expandedTransaction === transaction.id ? "Tutup Detail" : "Lihat Detail"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Transaction Details */}
                  {expandedTransaction === transaction.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 p-6 bg-gray-50"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Items List */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Item yang Dibeli</h4>
                          <div className="space-y-3">
                            {transaction.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex justify-between items-center p-3 bg-white rounded-md"
                              >
                                <div>
                                  <p className="font-medium text-gray-800">{item.name}</p>
                                  <p className="text-gray-600 text-sm">Jumlah: {item.quantity}</p>
                                </div>
                                <p className="font-bold text-gray-900">
                                  Rp{(item.price * item.quantity).toLocaleString("id-ID")}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Shipping & Payment Info */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Informasi Pengiriman</h4>
                          <div className="bg-white p-4 rounded-md">
                            <p className="text-gray-600 mb-2">
                              <span className="font-medium">Alamat:</span>
                            </p>
                            <p className="text-gray-800 mb-4">{transaction.shippingAddress}</p>
                            <p className="text-gray-600 mb-2">
                              <span className="font-medium">Metode Pembayaran:</span>
                            </p>
                            <p className="text-gray-800">{transaction.paymentMethod}</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        {transaction.status === "Selesai" && (
                          <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors font-medium">
                            Beli Lagi
                          </button>
                        )}
                        {transaction.status === "Dalam Pengiriman" && (
                          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors font-medium">
                            Lacak Pengiriman
                          </button>
                        )}
                        <button className="border border-gray-300 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors font-medium">
                          Unduh Invoice
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Dashboard */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link
            to="/dashboard"
            className="inline-block border border-gray-300 text-gray-800 py-3 px-6 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HistoryTransaction