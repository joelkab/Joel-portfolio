'use client'

import { useEffect, useRef, useState } from 'react'
import { Code, Cpu, Database, GitBranch, Terminal, Wrench } from 'lucide-react'
import Image from 'next/image'

export default function About() {
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

  const skills = [
    { 
      category: 'Languages', 
      items: ['C++', 'Swift', 'Python', 'HTML5', 'CSS3', 'JSON'],
      icon: <Code className="w-6 h-6" />
    },
    { 
      category: 'Frameworks & Tools', 
      items: ['NVIDIA Isaac Sim', 'Mujoco', 'ROS', 'Git', 'Fusion 360', 'MongoDB', 'MySQL', 'Firebase', 'RESTful API'],
      icon: <Wrench className="w-6 h-6" />
    },
    { 
      category: 'Machine Learning & Robotics', 
      items: ['PyTorch', 'NVIDIA Gr00T', 'NVIDIA DreamGen', 'Computer Vision', 'OpenCV'],
      icon: <Cpu className="w-6 h-6" />
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="order-2 md:order-1">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-1 rounded-full">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-full">
                    <Image
                      src="/images/profile.jpg"
                      alt="Joel Kabura"
                      width={400}
                      height={400}
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a Computer Science student at the University of Las Vegas, Nevada, currently working as a 
                Software Engineering Intern at Haigs's Quality Printing. I'm passionate about robotics, 
                machine learning, and building innovative solutions that bridge the gap between simulation and reality.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                My journey in tech started with a curiosity about how things work and has evolved into a deep 
                passion for creating impactful software. From building vision pipelines for robotic arms to 
                developing secure web applications, I love tackling complex challenges and turning ideas into reality.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                As a Dean's Honor List recipient and MLT Ascend Program Scholar, I'm committed to continuous 
                learning and leadership development. I believe in the power of technology to solve real-world 
                problems and am always eager to explore new technologies and methodologies.
              </p>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Quick Facts</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Currently building robotics vision pipelines</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GitBranch className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Active open-source contributor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Experience with Web3 security analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Passionate about AI/ML and robotics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className={`transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
                        {skillGroup.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
