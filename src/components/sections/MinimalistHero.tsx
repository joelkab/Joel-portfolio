'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'

export default function MinimalistHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-8 lg:px-32 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left side - Text */}
            <div className="flex-1 text-center md:text-left">
              {/* Title with accent */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-blue-500">Hi</span>, I&apos;m Joel
              </h1>
              
              {/* Description */}
              <div className="text-gray-700 space-y-4 mb-6 text-[17px] leading-[1.7]">
                <p>
                  I'm a software engineering intern passionate about bridging the gap between artificial intelligence and real-world applications. Currently based in Las Vegas, I specialize in building intelligent software systems that transform complex data into actionable insights.
                </p>

                <p>
                  At <a href="https://aeroai.io/" className="text-blue-500 underline">AERO AI</a>, I work at the intersection of AI and geospatial intelligence, where I:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Develop software that powers advanced data visualization and analysis tools for industries like architecture, engineering, and construction</li>
                  <li>Contribute to solutions that help organizations make smarter decisions through AI-powered insights and interactive 3D technologies</li>
                </ul>

                <p>
                  At <a href="https://www.haigsprinting.com/" className="text-blue-500 underline">Haigs Quality Printing</a>, I worked at the intersection of robotics and AI, where I:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Built and programmed autonomous robots that understood and executed specialized manufacturing tasks using cutting-edge AI frameworks</li>
                </ul>

                <p className="text-gray-600 italic">
                  I enjoy building technology that helps businesses run smoother by turning complex challenges into practical, intelligent solutions.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/joelkab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-3 px-6 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/Joelkabura" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-3 px-6 bg-[#0077B5] text-white rounded hover:bg-[#006396] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gray-200 rounded-full overflow-hidden">
                  {/* Replace with your actual image */}
                  <Image
                    src="/images/profile.jpg"
                    alt="Joel Kabura"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}