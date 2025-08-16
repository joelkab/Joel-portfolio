'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Code2, Home, User, Briefcase, Mail } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 text-xl font-bold"
            >
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className={`${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                Joel Kabura
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : scrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      : 'text-gray-200 hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              } hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
