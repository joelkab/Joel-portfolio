import { useState, useEffect } from 'react';

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'cad', 'contact'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      let currentSection = 'home';
      
      for (const element of sectionElements) {
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = element.id;
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    activeSection,
    setActiveSection,
    showScrollTop,
    scrollToTop
  };
};