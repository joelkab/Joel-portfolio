'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function MinimalistShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  
  const mediaItems = [
    { type: 'image', src: '/picture1.jpg', alt: 'Showcase Image' },
    { type: 'video', src: '/video1.mp4', poster: '/video1-poster.jpg' },
    { type: 'video', src: '/video2.mp4', poster: '/video2-poster.jpg' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Auto-play videos when section is visible
          videoRefs.current.forEach(video => {
            if (video) {
              video.play().catch(() => {})
            }
          })
        } else {
          // Pause videos when section is not visible
          videoRefs.current.forEach(video => {
            if (video) {
              video.pause()
            }
          })
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
    <section ref={sectionRef} className="py-16 px-8 lg:px-32 my-16 bg-gray-50">
      <div>
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <h2 className="text-3xl font-bold mb-12 text-black">Showcase</h2>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="overflow-x-auto max-w-7xl mx-auto">
            <div className="flex gap-6 justify-center pb-4">
              {mediaItems.map((item, index) => (
                <div key={index} className="w-96 flex-shrink-0">
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                    {item.type === 'image' ? (
                      <Image
                        src={item.src}
                        alt={item.alt || ''}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    ) : (
                      <video
                        ref={(el) => {
                          if (item.type === 'video') {
                            videoRefs.current[index - 1] = el
                          }
                        }}
                        src={item.src}
                        poster={item.poster}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        controls
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-gray-700 text-[17px] leading-[1.7] mt-8 max-w-3xl mx-auto px-8">
            Running NVIDIA Isaac GR00T N1, an open vision-language-action foundation model, on a so101 arm to perceive the scene and execute closed-loop pick-and-place on a marker and a mug.
          </p>
        </div>
      </div>
    </section>
  )
}