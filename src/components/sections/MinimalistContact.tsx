'use client'

import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Github, Linkedin, MapPin } from 'lucide-react'

export default function MinimalistContact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  const [state, handleSubmit] = useForm("xnnbzrkp")

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
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">Wanna get in touch?</h2>
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
            
            <div>
              {state.succeeded ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded text-green-700">
                  Thanks for your message! I'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="Feel free to send a message."
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="py-3 px-8 bg-black text-white rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}