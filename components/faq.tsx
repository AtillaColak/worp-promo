"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "What makes Worp different from other music apps?",
      answer:
        "Worp combines AI-powered recommendations, immersive audio technology, and social features to create a unique music experience. Our platform is designed to help you discover music you'll love while connecting with friends and artists in meaningful ways.",
    },
    {
      question: "Is Worp available on all devices?",
      answer:
        "Yes, Worp is available on iOS, Android, desktop (Windows and Mac), and web browsers. Your account and music sync seamlessly across all your devices.",
    },
    {
      question: "How much does Worp cost?",
      answer:
        "Worp offers a free tier with limited features and ads. Our premium subscription removes ads, enables higher audio quality, offline listening, and exclusive content for $9.99/month. We also offer family and student plans.",
    },
    {
      question: "Can I listen to music offline?",
      answer:
        "Yes, premium subscribers can download songs, albums, and playlists for offline listening. This feature is perfect for travel or areas with limited connectivity.",
    },
    {
      question: "How does Worp's recommendation system work?",
      answer:
        "Our AI-powered recommendation engine analyzes your listening habits, liked songs, and followed artists to suggest music you'll enjoy. The more you use Worp, the better our recommendations become.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-[#1D1616]" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-[#D84040]">Questions</span>
          </h2>
          <p className="text-[#E5D0AC]">
            Find answers to common questions about Worp. If you need more help, our support team is always ready to
            assist.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center transition-colors duration-300 ${
                  activeIndex === index ? "bg-[#8E1616]/20 border-[#D84040]/50" : "bg-[#1D1616] hover:bg-[#8E1616]/10"
                } border border-[#8E1616]/20`}
              >
                <span className="font-medium text-lg text-[#EEEEEE]">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#D84040] transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-x border-b border-[#8E1616]/20 rounded-b-lg text-[#E5D0AC]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

