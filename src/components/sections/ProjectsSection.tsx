'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Smartphone, Server, Camera, Code } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  icon: React.ReactNode
  gradient: string
  date: string
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      title: 'ESBReview',
      description: 'ESB(Electric Skateboard Review) is an application where peopele with the intrest of Electric skate boards can share their experience of buying an eletric Skateboard, useful tips or the topic itself.',
      tech: ['Swift', 'Firebase', 'FirebaseAuth', 'KFImage'],
      github: 'https://github.com/joelkab/ESBreview2.0', // Update with actual repo link
      gradient: 'from-blue-500 to-cyan-500',
      icon: <Smartphone className="w-8 h-8" />,
      date: 'May 2022 - July 2022'
    },
    {
      title: 'Banking System',
      description: "The Bank Account Management System is an application for maintaining a person's account in a bank. It Can perform basic tasks like-: 1).account creation 2).information retrieval 3).withdrawing 4).deposit.",
      tech: ['C++', 'OOP', 'Data Structures'],
      github: 'https://github.com/joelkab', // Update with actual repo link
      gradient: 'from-green-500 to-emerald-500',
      icon: <Server className="w-8 h-8" />,
      date: 'October 2022 - November 2022'
    },
    {
      title: 'PhotoOptic',
      description: "PhotoOptic is a program made with Python and OpenCV. It takes your ordinary pictures and makes them awesome with different filters and effects. Plus, you can grab images from the web super easily! It's all designed to be simple and straightforward.",
      tech: ['Python', 'OpenCV', 'urllib'],
      github: 'https://github.com/joelkab/PhotoOptic', // Update with actual repo link
      gradient: 'from-cyan-500 to-teal-500',
      icon: <Camera className="w-8 h-8" />,
      date: 'February 2024 - March 2024'
    },
    {
      title: 'SpexNews',
      description: "Spex new is an iPhone iPad app for reading the latest space news on the go. It's optimized for quickly catching up on the latest news without getting in your way.",
      tech: ['Swift ', 'REST API'],
      github: 'https://github.com/joelkab/SpexNews', // Update with actual repo link
      gradient: 'from-cyan-500 to-teal-500',
      icon: <Camera className="w-8 h-8" />,
      date: 'June 2022 - August 2022'
    }
    
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group h-full">
                  {/* Background gradient on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}
                  />
                  
                  <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full flex flex-col">
                    {/* Project Icon */}
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white mb-4`}>
                      {project.icon}
                    </div>

                    {/* Project Info */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {project.date}
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More on GitHub */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/joelkab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

