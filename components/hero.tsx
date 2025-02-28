"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 bg-[#8E1616]/20 rounded-full text-[#D84040] text-sm font-medium"
            >
              Redefining Music Experience
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Discover Music Like <span className="text-[#D84040]">Never Before</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-[#E5D0AC] max-w-lg"
            >
              Worp transforms how you listen, discover, and connect through music. Immersive audio experiences tailored
              just for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#download"
                className="bg-[#D84040] hover:bg-[#B03052] text-[#EEEEEE] px-8 py-3 rounded-full text-center transition-colors duration-300 font-medium"
              >
                Download Now
              </Link>
              <Link
                href="#how-it-works"
                className="border border-[#8E1616] hover:border-[#D84040] text-[#EEEEEE] px-8 py-3 rounded-full text-center transition-colors duration-300 font-medium"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8E1616] to-[#B03052] rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-[#1D1616] rounded-2xl overflow-hidden border border-[#8E1616]/20 aspect-square md:aspect-[4/5]">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Worp Music App Interface"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616] to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#1D1616] p-4 rounded-xl border border-[#8E1616]/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D84040] rounded-full flex items-center justify-center">
                  <span className="text-[#EEEEEE] font-bold">4.9</span>
                </div>
                <div>
                  <p className="text-[#EEEEEE] font-medium">User Rating</p>
                  <p className="text-[#E5D0AC] text-sm">Based on 10k+ reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

