"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const StorySection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="story-section py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-center">
            OUR STORY
          </motion.h2>

          <motion.div variants={itemVariants} className="story-content mb-16 text-center">
            <p className="text-xl mb-6">
              Born from a love of sneaker culture and a sense of humor, Oops Indonesia creates sneakers that pay homage
              to the icons we all know and love.
            </p>
            <p className="text-lg text-gray-300">We're not trying to be them. We're just having fun with them.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="story-content bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-4 text-center">Quality</div>
              <p className="text-gray-300">
                Just because we're not the originals doesn't mean we compromise on quality. Each pair is crafted with
                attention to detail and built to last.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="story-content bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-4 text-center">Style</div>
              <p className="text-gray-300">
                We take inspiration from the classics and add our own twist. The result? Sneakers that stand out while
                paying respect to the icons.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="story-content bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-4 text-center">Community</div>
              <p className="text-gray-300">
                We're building a community of sneaker lovers who don't take themselves too seriously. Join us and
                embrace the fun side of sneaker culture.
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="story-content mt-16 text-center">
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors">
              Learn More About Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
