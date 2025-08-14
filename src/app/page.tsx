"use client";

import React, { useState } from 'react';

// Components
import Navigation from '../components/sections/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CADSection, { CADProject } from '../components/sections/CADSection';
import ContactSection from '../components/sections/ContactSection';
import ScrollToTop from '../components/ui/ScrollToTop';
import Notification from '../components/ui/Notification';

// Hooks
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useEmailObfuscation } from '../hooks/useEmailObfuscation';

// Types
import { Project } from '../components/ui/ProjectCard';

const user = {
  name: "Marc Dy",
  title: "Software Engineer",
  bio: "I build things for the web, for my games, and for fun. Currently turning creative ideas into functional code.",
  // Email obfuscated - will be decoded client-side
  email: { encoded: "ZHltYXJjY2FybG9AeWFob28uY29t", domain: "yahoo.com" },
  social: {
    github: "https://github.com/decentaro",
    linkedin: "#",
    twitter: "#"
  }
};

const projects: Project[] = [
  {
    id: 1,
    title: "TCGNode",
    shortDesc: "Trading Card Price Comparison Tool",
    description: "Web application helping TCG enthusiasts compare Pokémon and One Piece card prices across multiple platforms with real-time data from TCGPlayer and OPTCG APIs.",
    detailedDescription: "A price tracking platform that fetches card prices from multiple TCG marketplaces via external APIs. Features real-time price monitoring and basic filtering options to help users compare card prices across different platforms.",
    technologies: ["React", "TailwindCSS", "shadcn/ui", "FastAPI", "API Integration", "Web Scraping"],
    techStack: [
      { name: "React", color: "cyan" },
      { name: "TailwindCSS", color: "blue" },
      { name: "shadcn/ui", color: "purple" },
      { name: "FastAPI", color: "green" },
      { name: "API Integration", color: "orange" },
      { name: "Web Scraping", color: "yellow" }
    ],
    github: undefined, // Private repo
    demo: "https://www.tcgnode.com",
    image: "/api/placeholder/600/400",
    status: "Live",
    type: "Web Application",
    featured: true,
    users: "20-50 active users",
    year: "2024-Present"
  },
  {
    id: 3,
    title: "Smart Scalp Massager",
    shortDesc: "IoT Hardware Project",
    description: "DIY ESP32-based remote-controlled scalp massager combining hardware engineering with software control for a personalized wellness device.",
    detailedDescription: "IoT device featuring custom 3D-printed chassis, ESP32 microcontroller programming, and wireless control interface. Includes web app integration for remote operation and customizable massage patterns.",
    technologies: ["ESP32", "C++", "IoT", "Hardware", "Django", "Bootstrap"],
    techStack: [
      { name: "ESP32", color: "orange" },
      { name: "C++", color: "blue" },
      { name: "IoT", color: "green" },
      { name: "Hardware", color: "gray" },
      { name: "Django", color: "green" },
      { name: "Bootstrap", color: "purple" }
    ],
    github: "https://github.com/decentaro/Scalp-Massager",
    demo: undefined,
    image: "/api/placeholder/600/400",
    status: "Completed",
    type: "Hardware",
    featured: true,
    year: "2023"
  },
  {
    id: 2,
    title: "MVP Tracker Discord Bot",
    shortDesc: "Ragnarok Online Gaming Bot",
    description: "Discord bot designed for Ragnarok Online players to track MVP (boss) spawns and timers to enhance gaming coordination.",
    detailedDescription: "Discord bot with MVP tracking functionality and custom commands. Features spawn timer tracking and basic user preferences to help Ragnarok Online players coordinate boss hunts.",
    technologies: ["Discord.js", "JavaScript", "Bot Development", "Gaming"],
    techStack: [
      { name: "Discord.js", color: "indigo" },
      { name: "JavaScript", color: "yellow" },
      { name: "Bot Development", color: "cyan" },
      { name: "Gaming", color: "red" }
    ],
    github: "https://github.com/decentaro/DiscordBOT-MVPList-",
    demo: undefined,
    image: "/api/placeholder/600/400",
    status: "Completed",
    type: "Discord Bot",
    featured: true,
    year: "2023"
  },
  {
    id: 4,
    title: "Data Collection System",
    shortDesc: "Django Web Application",
    description: "Django-based web application for workplace data error management, streamlining data collection and validation processes.",
    detailedDescription: "Simple data management platform built with Django. Features basic user authentication, form-based data collection, and reporting functionality to help manage workplace data entry and validation.",
    technologies: ["Django", "Python", "Data Management", "Web App", "Bootstrap"],
    techStack: [
      { name: "Django", color: "green" },
      { name: "Python", color: "blue" },
      { name: "Data Management", color: "purple" },
      { name: "Web App", color: "cyan" },
      { name: "Bootstrap", color: "purple" }
    ],
    github: "https://github.com/decentaro/DataCollectionForWork",
    demo: "https://finaltechs.pythonanywhere.com/tek84Troubleshoot/",
    image: "/api/placeholder/600/400",
    status: "Live",
    type: "Web Application",
    featured: true,
    year: "2022"
  }
];

const cadProjects: CADProject[] = [
  {
    id: 1,
    title: "Jetson Nano Case",
    description: "Custom 3D-designed protective case for NVIDIA Jetson Nano optimized for wearable computing applications",
    images: [
      "/cad-designs/jetson_nano_1.png",
      "/cad-designs/jetson_nano_2.png", 
      "/cad-designs/jetson_nano_3.png"
    ],
    category: "Hardware Design"
  },
  {
    id: 2,
    title: "Raspberry Pi Case",
    description: "Custom 3D-designed protective case for Raspberry Pi Compute Module and carrier PCB assembly optimized for wearable computing applications", 
    images: [
      "/cad-designs/raspberry_pi_1.png",
      "/cad-designs/raspberry_pi_2.png",
      "/cad-designs/raspberry_pi_3.png",
      "/cad-designs/raspberry_pi_4.png"
    ],
    category: "Hardware Design"
  },
  {
    id: 3,
    title: "Soldering Fume Extractor",
    description: "Custom 3D-designed fume extraction system with integrated blower fan to remove harmful solder smoke and improve workshop air quality during electronics work",
    images: [
      "/cad-designs/extractor_1.png",
      "/cad-designs/extractor_2.png",
      "/cad-designs/extractor_3.png",
      "/cad-designs/extractor_4.png",
    ],
    category: "Workshop Tools"
  }
];

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C/C++", "SQL", "HTML/CSS"] },
  { category: "Frontend", items: ["React", "Next.js", "TailwindCSS", "Bootstrap", "shadcn/ui"] },
  { category: "Backend", items: ["NestJS", "FastAPI", "Django", "REST APIs"] },
  { category: "Cloud/Database", items: ["AWS (Lambda, EC2, RDS, SageMaker, DynamoDB)", "PostgreSQL", "MongoDB", "SQLite"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "VS Code", "Jira", "Confluence", "Linux", "Arduino", "Raspberry Pi"] }
];

export default function Portfolio() {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [notification, setNotification] = useState<{message: string, type: string} | null>(null);
  const [selectedCADImage, setSelectedCADImage] = useState<{ projectId: number | null; imageIndex: number }>({ projectId: null, imageIndex: 0 });
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; index: number; projectId: number } | null>(null);

  // Custom hooks
  const { activeSection, setActiveSection, showScrollTop, scrollToTop } = useScrollSpy();
  const decodedEmail = useEmailObfuscation(user.email.encoded);

  // Notification handler
  const showNotification = (message: string, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        userName={user.name}
      />

      {/* Hero Section */}
      <HeroSection user={user} />

      {/* About Section */}
      <AboutSection skills={skills} />

      {/* Projects Section */}
      <ProjectsSection
        projects={projects}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        expandedProject={expandedProject}
        setExpandedProject={setExpandedProject}
      />

      {/* CAD Section */}
      <CADSection
        cadProjects={cadProjects}
        selectedCADImage={selectedCADImage}
        setSelectedCADImage={setSelectedCADImage}
        lightboxImage={lightboxImage}
        setLightboxImage={setLightboxImage}
      />

      {/* Contact Section */}
      <ContactSection
        decodedEmail={decodedEmail}
        showNotification={showNotification}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 {user.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* UI Components */}
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
      <Notification notification={notification} />
    </div>
  );
};