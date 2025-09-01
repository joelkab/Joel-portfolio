'use client'

import { useEffect, useRef, useState } from 'react'

interface Project {
  title: string
  description: string
  summary?: string
  highlights?: string[]
  tags: Array<{
    name: string
    color: string
  }>
  link?: string
  github?: string
  image?: string
}

export default function MinimalistProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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
      title: 'Autonomous Racing',
      description: 'Programmed an RC car 1/10th the size of an F1 car to autonomously race against other cars while avoiding obstacles',
      summary: 'Developed an autonomous racing system for a 1/10th scale F1 RC car capable of competitive racing and obstacle avoidance. Implemented advanced control systems including Model Predictive Controllers and PID Controllers, along with vision algorithms such as SLAM for environment mapping and navigation.',
      highlights: [
        'Implemented Model Predictive Controllers and PID Controllers for precise vehicle control',
        'Integrated SLAM (Simultaneous Localization and Mapping) for real-time environment perception',
        'Conducted extensive simulations to verify control algorithms',
        'Achieved reliable obstacle avoidance and competitive racing performance',
        'Demonstrated feasibility of advanced control systems in small-scale autonomous vehicles'
      ],
      tags: [
        { name: 'ROS2', color: 'bg-blue-500' },
        { name: 'Python', color: 'bg-yellow-400' },
        { name: 'Control Systems', color: 'bg-purple-500' },
        { name: 'Computer Vision', color: 'bg-green-500' },
        { name: 'SLAM', color: 'bg-red-500' }
      ],
      image: '/images/autonomous-racing.png'
    },
    {
      title: 'MeowSQL',
      description: 'Database that stores and retrieves rows of data in CSV files',
      summary: 'MeowSQL is a database application that stores and retrieves data in CSV files. It includes a secure login system that prompts the user to enter their username and password as command line arguments, and verifies the entered credentials against predefined credentials stored in the program. If the credentials are valid, the program displays a header for the database and allows the user to add, delete, and search for data through a user-friendly interface',
      highlights: [
        'Secure login system with command-line authentication',
        'CSV-based data storage for lightweight deployment',
        'Interactive menu-driven interface for CRUD operations',
        'Built from scratch in C++ with file manipulation'
      ],
      tags: [
        { name: 'C++', color: 'bg-blue-600' },
        { name: 'Database', color: 'bg-green-500' },
        { name: 'CSV', color: 'bg-gray-600' }
      ],
      github: 'https://github.com/joelkab/MeowSQL'
    },
    {
      title: 'ESB(Electric Skateboard Review)',
      description: 'Social review platform with real-time database and secure authentication',
      summary: 'ESB(Electric Skateboard Review) is an application where people with an interest in electric skateboards can share their experience of buying an electric skateboard, useful tips, or the topic itself.',
      highlights: [
        'Real-time updates with Firebase backend',
        'Secure authentication with login/signup functionality',
        'Image upload support using Kingfisher library',
        'Community-focused platform for electric skateboard enthusiasts'
      ],
      tags: [
        { name: 'Swift', color: 'bg-orange-500' },
        { name: 'Firebase', color: 'bg-yellow-400' },
        { name: 'iOS', color: 'bg-gray-700' }
      ],
      github: 'https://github.com/joelkab/ESBreview2.0'
    },
    {
      title: 'PhotoOptic',
      description: 'Image enhancement platform with various filters and effects',
      summary: 'MeowSQL is database application that stores and retrieves data in CSV files. It includes a secure login system and allows users to add, delete, and search for data. The program also includes debugging and testing features to ensure smooth operation.',
      highlights: [
        'Multiple filters and effects using OpenCV',
        'Web image retrieval and processing capability',
        'User-friendly interface for image transformations',
        'Python-based for cross-platform compatibility'
      ],
      tags: [
        { name: 'Python', color: 'bg-yellow-400' },
        { name: 'OpenCV', color: 'bg-blue-500' },
        { name: 'Flask', color: 'bg-gray-700' }
      ],
      github: 'https://github.com/joelkab/PhotoOptic'
    },
    {
      title: 'SpexNews',
      description: 'Displays the most recent news on space from NASA, Spaceflight, Arstechnica, and more',
      summary: 'iOS app that aggregates space news from various sources using the Spaceflight News API. Read posts directly in-app with SFSafariViewController.',
      highlights: [
        'Aggregates news from NASA, Spaceflight, Arstechnica and more',
        'In-app article reading with SFSafariViewController',
        'Integrates official Spaceflight News API',
        'Image caching with Kingfisher for smooth performance'
      ],
      tags: [
        { name: 'Swift', color: 'bg-orange-500' },
        { name: 'iOS', color: 'bg-gray-700' },
        { name: 'Kingfisher', color: 'bg-blue-500' }
      ],
      github: 'https://github.com/joelkab/SpexNews'
    },
    {
      title: 'banking-system',
      description: 'Bank Account Management System with OOP principles',
      summary: 'Comprehensive banking system implementation showcasing advanced OOP design patterns. Features transaction history, account types, and security measures.',
      highlights: [
        'Multi-threaded transaction processing',
        'Secure authentication with encryption',
        'Comprehensive unit test coverage'
      ],
      tags: [
        { name: 'C++', color: 'bg-blue-600' },
        { name: 'OOP', color: 'bg-purple-500' },
        { name: 'Data Structures', color: 'bg-green-500' }
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
                <div 
                  className="bg-white rounded-lg p-6 h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-2 text-black hover:text-gray-600 transition-colors">
                    {project.title}
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

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4 text-black">{selectedProject.title}</h2>
            
            {/* Project Image */}
            {selectedProject.image && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            
            {/* Summary */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {selectedProject.summary || selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`${tag.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {selectedProject.highlights && selectedProject.highlights.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* GitHub Link */}
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modal-pop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-modal-pop {
          animation: modal-pop 0.2s ease-out;
        }
      `}</style>
    </section>
  )
}