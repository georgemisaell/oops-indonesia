"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const products = [
  {
    id: 1,
    name: "Air Jordunk 1",
    brand: "Jordunk",
    price: "Rp 899.000",
    image: "../../img/product/Jordan.jpg",
    description: "Inspired by the legendary Air Jordan 1, but with our unique Oops twist.",
  },
  {
    id: 2,
    name: "Naik Air Farce 1",
    brand: "Naik",
    price: "Rp 799.000",
    image: "../../img/product/Nike.jpg",
    description: "Our take on the classic Air Force 1. Almost the real thing, but better.",
  },
  {
    id: 3,
    name: "Adibas Superstar",
    brand: "Adibas",
    price: "Rp 749.000",
    image: "../../img/product/Adidas.jpg",
    description: "The iconic shell toe with our special Adibas touch. Four stripes, not three.",
  },
  {
    id: 4,
    name: "Cuma Suede Classic",
    brand: "Cuma",
    price: "Rp 699.000",
    image: "../../img/product/Puma.jpg",
    description: "The suede classic, reimagined. Jumping cat not included.",
  },
]

const FeaturedProducts = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">FEATURED SNEAKERS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular kicks. Not quite the brands you know, but the style you love.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card bg-gray-50 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <p className="font-bold">{product.price}</p>
                </div>
                <div className="product-info">
                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                  <button className="mt-4 w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button className="border-2 border-black text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-black hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
