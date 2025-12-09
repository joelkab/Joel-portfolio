'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function MinimalistRecentWork() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-8 lg:px-32 my-16">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-8 text-black">Recent Work</h2>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://www.linkedin.com/posts/ugcPost-7402754878621859841-cMAm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk6UpsBlHnXOn64WeJLQF2Iwh7NXsYQw24"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex gap-6 items-start bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 max-w-2xl mx-auto">
              {/* Image */}
              <div className="flex-shrink-0 w-32 h-40 overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/Mostrecentwork.png"
                  alt="AERO AI LinkedIn Post"
                  width={150}
                  height={190}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                  priority
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">AERO AI - SiEGA Platform</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Developed visualization and analysis tools for SiEGA, a web-based platform handling complex 3D geospatial data. Built interactive browser interfaces for processing Gaussian splats, photogrammetry models, LiDAR point clouds.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">View Post</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
