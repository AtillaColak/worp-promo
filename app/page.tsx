"use client"

import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Faq from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  return (
    <div className="min-h-screen bg-[#000000] text-[#EEEEEE]">
      <Header />
      <main>
        <Hero />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

