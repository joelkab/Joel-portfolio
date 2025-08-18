'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, MapPin } from 'lucide-react'

export default function MinimalistContact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-8 lg:px-32 my-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h2 className="text-3xl font-bold mb-8 text-black">Wanna get in touch?</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 text-[17px] leading-[1.7]">
              I am always available for exciting discussions
            </p>
            
            {/* Email */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">📧</span>
              <a 
                href="mailto:joelkabura123@gmail.com"
                className="text-blue-600 hover:text-blue-700 underline text-[17px]"
              >
                joelkabura123@gmail.com
              </a>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="text-gray-700 text-[17px]">Las Vegas, Nevada</span>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
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
        </div>
      </div>
    </section>
  )
}