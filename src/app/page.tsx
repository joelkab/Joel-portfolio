'use client'

import MinimalistHero from '@/components/sections/MinimalistHero'
import MinimalistProjects from '@/components/sections/MinimalistProjects'
import MinimalistContact from '@/components/sections/MinimalistContact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* No navbar - clean like Mads' site */}
      
      {/* Main sections */}
      <main>
        <MinimalistHero />
        <MinimalistProjects />
        
        {/* Future section placeholder - add your content here */}
        
        <MinimalistContact />
      </main>
      
      {/* Simple footer */}
      <footer className="py-8 px-4 text-center text-gray-500 text-sm bg-white border-t">
        <p>© 2025 Joel Kabura. All rights reserved.</p>
      </footer>
    </div>
  )
}