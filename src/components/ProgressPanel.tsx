'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { Check, Circle, ChevronUp } from 'lucide-react'

interface Section {
  id: string
  label: string
  completed: boolean
}

const SEGMENT_COUNT = 28
const VISIBILITY_THRESHOLD = 60
const INTERSECTION_THRESHOLD = 0.4

export default function ProgressPanel() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasReachedEnd, setHasReachedEnd] = useState(false)
  const [sections, setSections] = useState<Section[]>([
    { id: 'hero', label: 'Introduction', completed: false },
    { id: 'experience', label: 'Experience', completed: false },
    { id: 'projects', label: 'Projects', completed: false },
    { id: 'showcase', label: 'Showcase', completed: false },
    { id: 'contact', label: 'Contact', completed: false }
  ])

  const animationFrame = useRef<number | null>(null)
  const observers = useRef<Map<string, IntersectionObserver>>(new Map())
  const liveRegionRef = useRef<HTMLDivElement>(null)
  const lastAnnouncedPercent = useRef(0)

  // Handle scroll progress
  const handleScroll = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current)
    }

    animationFrame.current = requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const percent = Math.min(Math.round((scrolled / scrollHeight) * 100), 100)

      setScrollPercent(percent)
      setIsVisible(scrolled > VISIBILITY_THRESHOLD)

      // Check if user has reached the end
      const isAtEnd = percent >= 98
      setHasReachedEnd(isAtEnd)

      // Announce progress at 25% intervals for screen readers
      if (Math.abs(percent - lastAnnouncedPercent.current) >= 25) {
        lastAnnouncedPercent.current = percent
        if (liveRegionRef.current) {
          liveRegionRef.current.textContent = `Portfolio progress: ${percent} percent`
        }
      }
    })
  }, [])

  // Handle section intersection
  const handleIntersection = useCallback((sectionId: string, isIntersecting: boolean) => {
    if (isIntersecting) {
      setSections(prev =>
        prev.map(section =>
          section.id === sectionId ? { ...section, completed: true } : section
        )
      )
    }
  }, [])

  // Scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Set focus after scroll animation
      setTimeout(() => {
        const heading = element.querySelector('h1, h2, h3')
        if (heading instanceof HTMLElement) {
          heading.focus()
          heading.setAttribute('tabindex', '-1')
        }
      }, 500)
    }
  }, [])

  // Setup intersection observers
  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              handleIntersection(section.id, entry.isIntersecting)
            })
          },
          { threshold: INTERSECTION_THRESHOLD }
        )
        observer.observe(element)
        observers.current.set(section.id, observer)
      }
    })

    // Scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    // Check responsive collapse
    const checkResponsive = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Only auto-collapse on initial mobile detection, not on every resize
      if (mobile && !isMobile) {
        setIsCollapsed(true)
      }
    }
    checkResponsive()
    window.addEventListener('resize', checkResponsive)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkResponsive)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
      observers.current.forEach(observer => observer.disconnect())
    }
  }, [handleScroll, handleIntersection, sections, isMobile])

  const filledSegments = Math.round((scrollPercent / 100) * SEGMENT_COUNT)
  const completedCount = sections.filter(s => s.completed).length

  return (
    <>
      {/* Screen reader live region */}
      <div
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Progress Panel */}
      <div
        className={`fixed bottom-4 left-4 z-40 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ maxWidth: '280px' }}
      >
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm text-gray-900">
                  {hasReachedEnd
                    ? "Thanks for exploring my portfolio!"
                    : "Keep exploring my portfolio"}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {hasReachedEnd && completedCount === sections.length
                    ? "You've seen everything!"
                    : `${completedCount} of ${sections.length} sections viewed`}
                </p>
              </div>
              {isMobile && (
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-1 rounded hover:bg-gray-100 transition-colors"
                  aria-label={isCollapsed ? 'Expand progress panel' : 'Collapse progress panel'}
                  aria-expanded={!isCollapsed}
                >
                  <ChevronUp
                    className={`w-4 h-4 text-gray-600 transition-transform ${
                      isCollapsed ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Segmented Progress Bar */}
            <div className="mt-3" role="progressbar" aria-valuenow={scrollPercent} aria-valuemin={0} aria-valuemax={100}>
              <div className="flex gap-0.5 h-1.5">
                {Array.from({ length: SEGMENT_COUNT }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-200 ${
                      i < filledSegments
                        ? hasReachedEnd
                          ? 'bg-green-500'
                          : 'bg-blue-500'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="sr-only">{scrollPercent}% complete</p>
            </div>
          </div>

          {/* Checklist */}
          {!isCollapsed && (
            <div className="p-2">
              <ul className="space-y-1">
                {sections.map(section => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm hover:bg-gray-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      aria-label={`${section.completed ? 'Completed' : 'Go to'}: ${section.label}`}
                    >
                      {section.completed ? (
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                      ) : (
                        <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                      )}
                      <span className={`${section.completed ? 'text-gray-700' : 'text-gray-600'}`}>
                        {section.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}