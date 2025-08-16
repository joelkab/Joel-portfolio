'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px] opacity-30 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Joel Kabura</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Software Engineering Intern | Computer Science Student
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </button>
      </div>
    </section>
  )
}
