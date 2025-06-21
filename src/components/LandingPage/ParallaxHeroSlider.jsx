"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const heroSlides = [
  {
    id: 1,
    title: "AIR JORDUNK 11 RETRO LOW",
    description: "The iconic silhouette returns with attitude.",
    image: "../../img/hero/Jordan.jpg",
    bgColor: "#8B0000", // dark red
    textColor: "white",
  },
  {
    id: 2,
    title: "NAIK AIR FARCE 1",
    description: "Classic style with our unique twist.",
    image: "../../img/hero/Nike.png",
    bgColor: "#000000", // black
    textColor: "white",
  },
  {
    id: 3,
    title: "ADIBAS SUPERSTAR",
    description: "Four stripes, not three. Stand out from the crowd.",
    image: "../../img/hero/Adidas.png",
    bgColor: "#1E3A8A", // dark blue
    textColor: "white",
  },
  {
    id: 4,
    title: "CUMA SUEDE CLASSIC",
    description: "Legendary comfort, reimagined for today.",
    image: "../../img/hero/Puma.jpg",
    bgColor: "#064E3B", // dark green
    textColor: "white",
  },
]

const ParallaxHeroSlider = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef(null)
  const slideInterval = 5000 // 5 seconds per slide

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }, slideInterval)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  // Pause auto-play on user interaction
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    // Resume after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index) => {
    pauseAutoPlay()
    setCurrentSlide(index)
  }

  const goToNextSlide = () => {
    pauseAutoPlay()
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const goToPrevSlide = () => {
    pauseAutoPlay()
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <div className="parallax-hero-slider relative h-screen overflow-hidden">
      {/* Background Layer with Color */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: currentSlideData.bgColor,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          {/* Window Effect Overlay */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 opacity-20">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="border border-white/20 p-4"></div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Middle Layer - Decorative Elements */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute w-full h-full">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] right-[15%] w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[15%] left-[30%] w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content Layer - Product and Text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              <div
                className="inline-block border border-current px-6 py-2 mb-6"
                style={{ color: currentSlideData.textColor }}
              >
                <h1 className="text-2xl md:text-4xl font-bold">{currentSlideData.title}</h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 max-w-md" style={{ color: currentSlideData.textColor }}>
                {currentSlideData.description}
              </p>
              <button
                className="bg-white text-black px-8 py-3 rounded-none text-lg font-bold hover:bg-gray-200 transition-colors"
                style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
              >
                SHOP NOW
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Product Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
              style={{ transform: `translateY(${scrollY * -0.4}px)` }}
            >
              <img
                src={currentSlideData.image || "/placeholder.svg"}
                alt={currentSlideData.title}
                className="max-w-full h-auto max-h-[60vh] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white w-12 h-12 flex items-center justify-center rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white w-12 h-12 flex items-center justify-center rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ParallaxHeroSlider