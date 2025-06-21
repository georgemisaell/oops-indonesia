import { useEffect } from "react"
import ParallaxHeroSlider from "../components/LandingPage/ParallaxHeroSlider"
import FeaturedProducts from "../components/LandingPage/FeaturedProducts"
import StorySection from "../components/LandingPage/StorySection"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const LandingPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  return (
    <div>
      <ParallaxHeroSlider />
      <FeaturedProducts />
      <StorySection />

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">JOIN THE OOPS FAMILY</h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter for exclusive offers, new releases, and more.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LandingPage
