'use client'

import { useEffect, useRef, useState } from 'react'

interface Project {
  title: string
  description: string
  tags: Array<{
    name: string
    color: string
  }>
  link?: string
  github?: string
}

export default function MinimalistProjects() {
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

  const projects: Project[] = [
    {
      title: 'robotics-vision',
      description: 'End-to-end vision pipeline for robotic arms using PyTorch and computer vision',
      tags: [
        { name: 'Python', color: 'bg-yellow-400' },
        { name: 'PyTorch', color: 'bg-orange-500' },
        { name: 'OpenCV', color: 'bg-blue-500' },
        { name: 'ROS', color: 'bg-gray-700' }
      ],
      github: 'https://github.com/joelkab'
    },
    {
      title: 'esbreview',
      description: 'Social review platform with real-time database and secure authentication',
      tags: [
        { name: 'Swift', color: 'bg-orange-500' },
        { name: 'Firebase', color: 'bg-yellow-400' },
        { name: 'iOS', color: 'bg-gray-700' }
      ],
      github: 'https://github.com/joelkab'
    },
    {
      title: 'photooptic',
      description: 'Image enhancement platform with various filters and effects',
      tags: [
        { name: 'Python', color: 'bg-yellow-400' },
        { name: 'OpenCV', color: 'bg-blue-500' },
        { name: 'Flask', color: 'bg-gray-700' }
      ],
      github: 'https://github.com/joelkab'
    },
    {
      title: 'banking-system',
      description: 'Bank Account Management System with OOP principles',
      tags: [
        { name: 'C++', color: 'bg-blue-600' },
        { name: 'OOP', color: 'bg-purple-500' },
        { name: 'Data Structures', color: 'bg-green-500' }
      ],
      github: 'https://github.com/joelkab'
    },
    {
      title: 'web3-analytics',
      description: 'Smart contract vulnerability analysis and risk profiling',
      tags: [
        { name: 'SQL', color: 'bg-blue-500' },
        { name: 'Python', color: 'bg-yellow-400' },
        { name: 'Blockchain', color: 'bg-purple-600' }
      ]
    },
    {
      title: 'ml-experiments',
      description: 'Collection of machine learning experiments and implementations',
      tags: [
        { name: 'Python', color: 'bg-yellow-400' },
        { name: 'TensorFlow', color: 'bg-orange-500' },
        { name: 'Jupyter', color: 'bg-gray-600' }
      ],
      github: 'https://github.com/joelkab'
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 px-8 lg:px-32 my-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h2 className="text-3xl font-bold mb-12 text-black">Projects</h2>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-700 delay-${index * 100}`}
              >
                <div className="bg-white rounded-lg p-6 h-full flex flex-col">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {project.github ? (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[17px] text-gray-600 mb-4 flex-grow leading-[1.7]">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className={`${tag.color} text-white text-xs px-2 py-1 rounded`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}