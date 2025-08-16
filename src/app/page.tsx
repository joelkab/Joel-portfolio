"use client";

import React from 'react';
// Components
import Navigation from '../components/sections/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';
import ScrollToTop from '../components/ui/ScrollToTop';
import Notification from '../components/ui/Notification';
// Hooks
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Portfolio() {
  // Custom hooks
  const { showScrollTop, scrollToTop } = useScrollSpy();
  const [notification, setNotification] = React.useState<{message: string, type: string} | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Joel Kabura. All rights reserved.
          </p>
        </div>
      </footer>

      {/* UI Components */}
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
      <Notification notification={notification} />
    </div>
  );
}
