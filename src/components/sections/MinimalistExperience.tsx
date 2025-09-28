'use client'

import { useEffect, useState } from 'react'

export default function MinimalistExperience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 px-8 lg:px-32 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-blue-500">Work</span> Experience
          </h2>

          <div className="text-gray-700 space-y-4 text-[17px] leading-[1.7]">
            <p>
              At <a href="https://aeroai.io/" className="text-blue-500 underline">AERO AI</a>, I work at the intersection of AI and geospatial intelligence, where I:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Develop software that powers advanced data visualization and analysis tools used across industries like architecture, engineering, and construction</li>
              <li>Contribute to solutions that help organizations make smarter decisions through AI-powered insights and interactive 3D technologies</li>
            </ul>

            <p>
              At <a href="https://www.haigsprinting.com/" className="text-blue-500 underline">Haigs Quality Printing</a>, I combined robotics with machine learning to:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Build and program autonomous robots that understood and executed specialized manufacturing tasks using cutting-edge frameworks and real-time control systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}