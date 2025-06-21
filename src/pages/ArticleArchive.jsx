"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

// Sample article data
const articles = [
  {
    id: 1,
    title: "The History of Sneaker Culture in Indonesia",
    excerpt: "Exploring how sneaker culture has evolved in Indonesia over the decades.",
    category: "Culture",
    image: "../../img/articles/invincible-asics-.webp",
    date: "May 15, 2023",
    author: "Budi Santoso",
  },
  {
    id: 2,
    title: "How to Spot Fake vs. Real Sneakers",
    excerpt: "A comprehensive guide to identifying authentic sneakers from counterfeits.",
    category: "Guides",
    image: "../../img/articles/nike-air-diamond-turf.webp",
    date: "June 2, 2023",
    author: "Dewi Putri",
  },
  {
    id: 3,
    title: "The Rise of Jordunk: Our Brand Story",
    excerpt: "How we created our most popular sneaker line inspired by basketball legends.",
    category: "Brand",
    image: "../../img/articles/nike-kobe.webp",
    date: "June 18, 2023",
    author: "Ahmad Rizal",
  },
  {
    id: 4,
    title: "Sneaker Care 101: Keeping Your Kicks Fresh",
    excerpt: "Essential tips and tricks to maintain your sneakers in pristine condition.",
    category: "Guides",
    image: "../../img/articles/nike-zoom-gt-cut-3.webp",
    date: "July 5, 2023",
    author: "Siti Nurhaliza",
  },
  {
    id: 5,
    title: "Street Style: Jakarta Sneakerheads",
    excerpt: "Showcasing the vibrant sneaker fashion scene in Indonesia's capital city.",
    category: "Style",
    image: "../../img/articles/pure-money-jordan.webp",
    date: "July 22, 2023",
    author: "Reza Rahadian",
  },
  {
    id: 6,
    title: "The Environmental Impact of Sneaker Production",
    excerpt: "Examining the sustainability challenges in the footwear industry.",
    category: "Sustainability",
    image: "../../img/articles/invincible-asics-.webp",
    date: "August 10, 2023",
    author: "Maya Indira",
  },
  {
    id: 7,
    title: "Naik Air Farce 1: Design Evolution",
    excerpt: "The creative process behind our iconic Naik Air Farce 1 sneakers.",
    category: "Brand",
    image: "../../img/articles/invincible-asics-.webp",
    date: "August 28, 2023",
    author: "Dian Sastro",
  },
  {
    id: 8,
    title: "Sneaker Collecting for Beginners",
    excerpt: "How to start your sneaker collection without breaking the bank.",
    category: "Guides",
    image: "../../img/articles/invincible-asics-.webp",
    date: "September 15, 2023",
    author: "Joko Widodo",
  },
  {
    id: 9,
    title: "Limited Edition Drops: Behind the Scenes",
    excerpt: "What goes into creating and launching our limited edition sneakers.",
    category: "Brand",
    image: "../../img/articles/invincible-asics-.webp",
    date: "October 3, 2023",
    author: "Iqbaal Ramadhan",
  },
  {
    id: 10,
    title: "Sneakers and Sports: The Perfect Match",
    excerpt: "How different sports influence sneaker design and technology.",
    category: "Culture",
    image: "../../img/articles/invincible-asics-.webp",
    date: "October 20, 2023",
    author: "Greysia Polii",
  },
  {
    id: 11,
    title: "Adibas Superstar: A Cultural Icon",
    excerpt: "The cultural significance of the Adibas Superstar in Indonesia.",
    category: "Culture",
    image: "../../img/articles/invincible-asics-.webp",
    date: "November 7, 2023",
    author: "Raditya Dika",
  },
  {
    id: 12,
    title: "Customizing Your Sneakers: DIY Guide",
    excerpt: "Step-by-step instructions for personalizing your Oops Indonesia kicks.",
    category: "Guides",
    image: "/placeholder.svg?height=400&width=600&text=DIY+Customization",
    date: "November 25, 2023",
    author: "Andien Aisyah",
  },
];

// Extract unique categories
const categories = ["All", ...new Set(articles.map((article) => article.category))]

const ArticleArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleArticles, setVisibleArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef(null)
  const articlesPerPage = 6

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "All" ? articles : articles.filter((article) => article.category === selectedCategory)

  // Load initial articles
  useEffect(() => {
    setVisibleArticles(filteredArticles.slice(0, articlesPerPage))
    setPage(1)
  }, [selectedCategory])

  // Infinite scroll implementation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (first.isIntersecting && !loading && visibleArticles.length < filteredArticles.length) {
          loadMoreArticles()
        }
      },
      { threshold: 1.0 },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  },)

  const loadMoreArticles = () => {
    setLoading(true)
    setTimeout(() => {
      const nextPage = page + 1
      const startIndex = (nextPage - 1) * articlesPerPage
      const endIndex = startIndex + articlesPerPage
      setVisibleArticles((prevArticles) => [...prevArticles, ...filteredArticles.slice(startIndex, endIndex)])
      setPage(nextPage)
      setLoading(false)
    }, 800)
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            OOPS BLOG
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Stories, guides, and insights from the world of sneaker culture
          </motion.p>
        </div>
      </div>
      <div className="bg-white py-8 sticky top-16 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`filter-button px-6 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="article-card bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {article.date} • {article.author}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="article-preview">
                      <Link
                        to={`/article/${article.id}`}
                        className="text-black font-medium hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {visibleArticles.length < filteredArticles.length && (
            <div ref={loaderRef} className="flex justify-center mt-12">
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-black animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-4 h-4 rounded-full bg-black animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-4 h-4 rounded-full bg-black animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              ) : (
                <button
                  onClick={loadMoreArticles}
                  className="border-2 border-black text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Load More Articles
                </button>
              )}
            </div>
          )}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">STAY IN THE LOOP</h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for the latest articles, sneaker releases, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ArticleArchive