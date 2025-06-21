import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample article data (copied from ArticleArchive.jsx for consistency)
const articles = [
  {
    id: 1,
    title: "The History of Sneaker Culture in Indonesia",
    excerpt: "Exploring how sneaker culture has evolved in Indonesia over the decades.",
    category: "Culture",
    image: "/placeholder.svg?height=400&width=600&text=Sneaker+Culture",
    date: "May 15, 2023",
    author: "Budi Santoso",
  },
  {
    id: 2,
    title: "How to Spot Fake vs. Real Sneakers",
    excerpt: "A comprehensive guide to identifying authentic sneakers from counterfeits.",
    category: "Guides",
    image: "/placeholder.svg?height=400&width=600&text=Fake+vs+Real",
    date: "June 2, 2023",
    author: "Dewi Putri",
  },
  {
    id: 3,
    title: "The Rise of Jordunk: Our Brand Story",
    excerpt: "How we created our most popular sneaker line inspired by basketball legends.",
    category: "Brand",
    image: "/placeholder.svg?height=400&width=600&text=Jordunk+Story",
    date: "June 18, 2023",
    author: "Ahmad Rizal",
  },
  {
    id: 4,
    title: "Sneaker Care 101: Keeping Your Kicks Fresh",
    excerpt: "Essential tips and tricks to maintain your sneakers in pristine condition.",
    category: "Guides",
    image: "/placeholder.svg?height=400&width=600&text=Sneaker+Care",
    date: "July 5, 2023",
    author: "Siti Nurhaliza",
  },
  {
    id: 5,
    title: "Street Style: Jakarta Sneakerheads",
    excerpt: "Showcasing the vibrant sneaker fashion scene in Indonesia's capital city.",
    category: "Style",
    image: "/placeholder.svg?height=400&width=600&text=Street+Style",
    date: "July 22, 2023",
    author: "Reza Rahadian",
  },
  {
    id: 6,
    title: "The Environmental Impact of Sneaker Production",
    excerpt: "Examining the sustainability challenges in the footwear industry.",
    category: "Sustainability",
    image: "/placeholder.svg?height=400&width=600&text=Environmental+Impact",
    date: "August 10, 2023",
    author: "Maya Indira",
  },
  {
    id: 7,
    title: "Naik Air Farce 1: Design Evolution",
    excerpt: "The creative process behind our iconic Naik Air Farce 1 sneakers.",
    category: "Brand",
    image: "/placeholder.svg?height=400&width=600&text=Naik+Design",
    date: "August 28, 2023",
    author: "Dian Sastro",
  },
  {
    id: 8,
    title: "Sneaker Collecting for Beginners",
    excerpt: "How to start your sneaker collection without breaking the bank.",
    category: "Guides",
    image: "/placeholder.svg?height=400&width=600&text=Collecting+Guide",
    date: "September 15, 2023",
    author: "Joko Widodo",
  },
  {
    id: 9,
    title: "Limited Edition Drops: Behind the Scenes",
    excerpt: "What goes into creating and launching our limited edition sneakers.",
    category: "Brand",
    image: "/placeholder.svg?height=400&width=600&text=Limited+Editions",
    date: "October 3, 2023",
    author: "Iqbaal Ramadhan",
  },
  {
    id: 10,
    title: "Sneakers and Sports: The Perfect Match",
    excerpt: "How different sports influence sneaker design and technology.",
    category: "Culture",
    image: "/placeholder.svg?height=400&width=600&text=Sneakers+and+Sports",
    date: "October 20, 2023",
    author: "Greysia Polii",
  },
  {
    id: 11,
    title: "Adibas Superstar: A Cultural Icon",
    excerpt: "The cultural significance of the Adibas Superstar in Indonesia.",
    category: "Culture",
    image: "/placeholder.svg?height=400&width=600&text=Adibas+Icon",
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

const DetailArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchedArticle = articles.find((a) => a.id === parseInt(id));
    setArticle(fetchedArticle);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-gray-700">Memuat artikel...</div>;
  }

  if (!article) {
    return (
      <div className="text-center py-20 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Artikel tidak ditemukan.</h2>
        <Link to="/articles" className="text-blue-600 hover:underline">
          Kembali ke daftar artikel
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="relative h-64 md:h-96">
            <img
              src={article.image || "/placeholder.svg?height=400&width=600&text=Article+Image"}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg?height=400&width=600&text=Article+Image";
              }}
            />
            <div className="absolute top-4 left-4 bg-black text-white text-sm font-bold px-3 py-1 rounded-full">
              {article.category}
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{article.title}</h1>
            <div className="text-sm text-gray-500 mb-6">
              {article.date} • {article.author}
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">{article.excerpt}</p>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {/* Placeholder for full article content */}
              <p>
                Ini adalah konten lengkap artikel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/articles"
                className="inline-block border border-gray-300 text-gray-800 py-3 px-6 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                Kembali ke Daftar Artikel
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailArticlePage;