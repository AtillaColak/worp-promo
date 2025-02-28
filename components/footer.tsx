"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Music } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  ]

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Community", href: "#" },
        { name: "Feedback", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Licenses", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-[#1D1616] border-t border-[#8E1616]/20">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Music className="h-8 w-8 text-[#D84040]" />
              <span className="ml-2 text-2xl font-bold text-[#EEEEEE]">
                <span className="text-[#D84040]">W</span>orp
              </span>
            </Link>
            <p className="text-[#E5D0AC] mb-6 max-w-md">
              Redefining how you experience music. Discover, connect, and immerse yourself in the world of sound with
              Worp.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-[#8E1616]/20 flex items-center justify-center text-[#D84040] hover:bg-[#8E1616] hover:text-[#EEEEEE] transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold text-[#EEEEEE] mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-[#E5D0AC] hover:text-[#D84040] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#8E1616]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#E5D0AC] text-sm mb-4 md:mb-0">&copy; {currentYear} Worp Music. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-[#E5D0AC] hover:text-[#D84040] text-sm transition-colors duration-300">
              Terms
            </Link>
            <Link href="#" className="text-[#E5D0AC] hover:text-[#D84040] text-sm transition-colors duration-300">
              Privacy
            </Link>
            <Link href="#" className="text-[#E5D0AC] hover:text-[#D84040] text-sm transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

