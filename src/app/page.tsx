'use client'

import MinimalistHero from '@/components/sections/MinimalistHero'
import MinimalistExperience from '@/components/sections/MinimalistExperience'
import MinimalistProjects from '@/components/sections/MinimalistProjects'
import MinimalistShowcase from '@/components/sections/MinimalistShowcase'
import MinimalistRecentWork from '@/components/sections/MinimalistRecentWork'
import MinimalistContact from '@/components/sections/MinimalistContact'
import ProgressPanel from '@/components/ProgressPanel'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Progress Panel */}
      <ProgressPanel />

      {/* No navbar - clean like Mads' site */}

      {/* Main sections */}
      <main>
        <section id="hero">
          <MinimalistHero />
        </section>
        <section id="experience">
          <MinimalistExperience />
        </section>
        <section id="projects">
          <MinimalistProjects />
        </section>
        <section id="showcase">
          <MinimalistShowcase />
        </section>

        <section id="recent-work">
          <MinimalistRecentWork />
        </section>

        <section id="contact">
          <MinimalistContact />
        </section>
      </main>
      
      {/* Simple footer */}
      <footer className="py-8 px-4 text-center text-gray-500 text-sm bg-white border-t">
        <p>© 2025 Joel Kabura. All rights reserved.</p>
      </footer>
    </div>
  )
}