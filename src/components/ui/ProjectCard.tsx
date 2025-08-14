import React from 'react';
import { Github, Eye } from 'lucide-react';

interface TechStack {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  techStack: TechStack[];
  github?: string;
  demo?: string;
  image: string;
  status: string;
  type: string;
  featured: boolean;
  users?: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
  expandedProject: number | null;
  setExpandedProject: (id: number | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  expandedProject,
  setExpandedProject
}) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Live': return 'bg-green-500';
      case 'In Development': return 'bg-yellow-500';
      case 'Completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-500 group relative hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 border border-transparent hover:border-cyan-500/30">
      {/* Enhanced Project Image */}
      <div className="relative h-48 flex items-center justify-center overflow-hidden transition-all duration-500">
        
        {/* Creative Backgrounds */}
        {project.id === 1 && (
          // Trading Card Shop Background
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
            {/* Card Shop Shelves */}
            <div className="absolute top-4 left-4 w-8 h-2 bg-amber-600 rounded opacity-30"></div>
            <div className="absolute top-8 left-4 w-8 h-2 bg-amber-700 rounded opacity-40"></div>
            <div className="absolute top-12 left-4 w-8 h-2 bg-amber-600 rounded opacity-30"></div>
            
            <div className="absolute top-4 right-4 w-8 h-2 bg-amber-600 rounded opacity-30"></div>
            <div className="absolute top-8 right-4 w-8 h-2 bg-amber-700 rounded opacity-40"></div>
            <div className="absolute top-12 right-4 w-8 h-2 bg-amber-600 rounded opacity-30"></div>
            
            {/* Floating card symbols */}
            <div className="absolute top-6 left-16 text-yellow-300 opacity-20 animate-pulse">♠</div>
            <div className="absolute top-16 right-16 text-red-300 opacity-20 animate-pulse delay-300">♥</div>
            <div className="absolute bottom-6 left-12 text-yellow-300 opacity-20 animate-pulse delay-500">♦</div>
            <div className="absolute bottom-16 right-12 text-blue-300 opacity-20 animate-pulse delay-700">♣</div>
          </div>
        )}
        
        {project.id === 2 && (
          // Gaming Fantasy Forest Background
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
            {/* Trees silhouettes */}
            <div className="absolute bottom-0 left-2 w-3 h-16 bg-green-800 opacity-40 rounded-t-full"></div>
            <div className="absolute bottom-0 left-6 w-4 h-20 bg-green-700 opacity-50 rounded-t-full"></div>
            <div className="absolute bottom-0 right-4 w-3 h-14 bg-green-800 opacity-40 rounded-t-full"></div>
            <div className="absolute bottom-0 right-8 w-2 h-18 bg-green-700 opacity-50 rounded-t-full"></div>
            
            {/* Mystical particles */}
            <div className="absolute top-8 left-8 w-1 h-1 bg-green-300 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-12 right-12 w-1 h-1 bg-emerald-300 rounded-full animate-ping delay-200 opacity-60"></div>
            <div className="absolute bottom-20 left-16 w-1 h-1 bg-teal-300 rounded-full animate-ping delay-400 opacity-60"></div>
            
            {/* Moon */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-gray-200 rounded-full opacity-30"></div>
          </div>
        )}
        
        {project.id === 3 && (
          // Spa/Wellness Background
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900">
            {/* Zen circles */}
            <div className="absolute top-8 left-8 w-12 h-12 border-2 border-pink-300 rounded-full opacity-20"></div>
            <div className="absolute top-12 left-12 w-8 h-8 border border-purple-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-12 right-8 w-10 h-10 border border-rose-300 rounded-full opacity-25"></div>
            
            {/* Floating bubbles */}
            <div className="absolute top-16 right-16 w-2 h-2 bg-pink-200 rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute top-24 right-12 w-1 h-1 bg-purple-200 rounded-full opacity-50 animate-bounce delay-200"></div>
            <div className="absolute bottom-16 left-16 w-3 h-3 bg-rose-200 rounded-full opacity-30 animate-bounce delay-400"></div>
            
            {/* Wellness symbols */}
            <div className="absolute top-6 right-6 text-pink-300 opacity-30 text-lg">✨</div>
            <div className="absolute bottom-6 left-6 text-purple-300 opacity-30 text-sm">🌸</div>
          </div>
        )}
        
        {project.id === 4 && (
          // Corporate Data Center Background
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900">
            {/* Server racks */}
            <div className="absolute left-2 top-4 w-2 h-32 bg-gray-600 opacity-40 rounded">
              <div className="w-full h-2 bg-green-400 opacity-60 mt-2 rounded-sm"></div>
              <div className="w-full h-2 bg-blue-400 opacity-60 mt-1 rounded-sm"></div>
              <div className="w-full h-2 bg-green-400 opacity-60 mt-1 rounded-sm"></div>
            </div>
            <div className="absolute right-2 top-6 w-2 h-28 bg-gray-700 opacity-40 rounded">
              <div className="w-full h-2 bg-blue-400 opacity-60 mt-2 rounded-sm"></div>
              <div className="w-full h-2 bg-green-400 opacity-60 mt-1 rounded-sm"></div>
            </div>
            
            {/* Data flow lines */}
            <div className="absolute top-8 left-8 w-16 h-px bg-cyan-400 opacity-30 animate-pulse"></div>
            <div className="absolute top-12 right-8 w-12 h-px bg-blue-400 opacity-30 animate-pulse delay-200"></div>
            <div className="absolute bottom-16 left-12 w-20 h-px bg-green-400 opacity-30 animate-pulse delay-400"></div>
            
            {/* Network nodes */}
            <div className="absolute top-10 left-24 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-50"></div>
            <div className="absolute bottom-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-300 opacity-50"></div>
          </div>
        )}
        
        {/* Custom Pixel Art Animations */}
        {project.id === 1 && (
          <div className="relative flex space-x-3 opacity-40 group-hover:opacity-90 transition-all duration-500">
            <div className="w-16 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-md shadow-2xl transform rotate-12 group-hover:rotate-6 group-hover:scale-125 transition-all duration-500 border-2 border-blue-300">
              <div className="w-full h-5 bg-gradient-to-r from-blue-200 to-blue-300 mt-2 rounded-sm opacity-90"></div>
              <div className="text-sm text-center text-white font-bold mt-3">⭐</div>
              <div className="w-10 h-1 bg-white/60 mx-auto mt-2 rounded"></div>
            </div>
            <div className="w-16 h-20 bg-gradient-to-b from-red-400 to-red-600 rounded-md shadow-2xl transform -rotate-8 group-hover:rotate-3 group-hover:scale-125 transition-all duration-700 border-2 border-red-300">
              <div className="w-full h-5 bg-gradient-to-r from-red-200 to-red-300 mt-2 rounded-sm opacity-90"></div>
              <div className="text-sm text-center text-white font-bold mt-3">♦</div>
              <div className="w-10 h-1 bg-white/60 mx-auto mt-2 rounded"></div>
            </div>
            <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-md shadow-2xl transform rotate-6 group-hover:-rotate-12 group-hover:scale-125 transition-all duration-600 border-2 border-yellow-300">
              <div className="w-full h-5 bg-gradient-to-r from-yellow-200 to-yellow-300 mt-2 rounded-sm opacity-90"></div>
              <div className="text-sm text-center text-white font-bold mt-3">⚡</div>
              <div className="w-10 h-1 bg-white/60 mx-auto mt-2 rounded"></div>
            </div>
            
            {/* Price tags that appear on hover */}
            <div className="absolute -bottom-8 left-2 text-sm text-green-400 font-bold opacity-0 group-hover:opacity-100 animate-pulse bg-black/70 px-2 py-1 rounded transition-all duration-500">$12.99</div>
            <div className="absolute -bottom-8 right-2 text-sm text-red-400 font-bold opacity-0 group-hover:opacity-100 animate-pulse delay-200 bg-black/70 px-2 py-1 rounded transition-all duration-500">$15.49</div>
          </div>
        )}

        {project.id === 2 && (
          <div className="relative w-32 h-32 opacity-40 group-hover:opacity-90 transition-all duration-500" style={{imageRendering: 'pixelated'}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-20 relative">
                <div className="absolute -left-3 top-2 w-4 h-5 bg-gradient-to-b from-white to-gray-300 rounded-sm group-hover:animate-pulse shadow-lg transform group-hover:rotate-12 transition-transform border border-gray-400"></div>
                <div className="absolute -right-3 top-2 w-4 h-5 bg-gradient-to-b from-white to-gray-300 rounded-sm group-hover:animate-pulse delay-100 shadow-lg transform group-hover:-rotate-12 transition-transform border border-gray-400"></div>
                <div className="w-10 h-16 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 mx-auto shadow-xl border-2 border-pink-600 group-hover:animate-bounce rounded-sm"></div>
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-5 bg-pink-100 rounded-sm"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-3 border-2 border-yellow-300 rounded-full group-hover:animate-spin shadow-lg bg-gradient-to-r from-yellow-200 to-yellow-400">
                  <div className="absolute inset-0 bg-yellow-200/50 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 text-sm text-yellow-300 font-bold bg-black/50 px-2 py-1 rounded">MVP</div>
            <div className="absolute top-3 left-3 text-sm text-green-300 font-bold animate-pulse bg-black/50 px-2 py-1 rounded">LV 99</div>
          </div>
        )}

        {project.id === 3 && (
          <div className="relative w-28 h-28 p-3 opacity-40 group-hover:opacity-90 transition-all duration-500">
            <div className="w-20 h-16 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full mx-auto border-3 border-amber-300 shadow-lg relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-10 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-full border border-amber-800"></div>
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg group-hover:animate-bounce shadow-xl border-3 border-blue-600">
                <div className="absolute inset-1 bg-blue-200/60 rounded animate-pulse"></div>
              </div>
              <div className="absolute top-7 left-6 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-7 right-6 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-pink-400 rounded-full"></div>
            </div>
            <div className="absolute -top-2 -right-2 text-yellow-300 animate-pulse text-lg">✨</div>
            <div className="absolute -bottom-2 -left-2 text-yellow-300 animate-pulse delay-300 text-lg">✨</div>
          </div>
        )}

        {project.id === 4 && (
          <div className="relative w-32 h-32 p-4 opacity-40 group-hover:opacity-90 transition-all duration-500">
            <div className="w-20 h-20 bg-white rounded mx-auto shadow-xl relative border-2 border-gray-300">
              <div className="absolute inset-2 bg-gray-50 rounded"></div>
              <div className="absolute top-3 left-3 right-3 space-y-1">
                <div className="w-12 h-1 bg-blue-500 rounded group-hover:animate-pulse"></div>
                <div className="w-10 h-1 bg-green-500 rounded group-hover:animate-pulse delay-100"></div>
                <div className="w-14 h-1 bg-purple-500 rounded group-hover:animate-pulse delay-200"></div>
                <div className="w-12 h-1 bg-orange-500 rounded group-hover:animate-pulse delay-300"></div>
                <div className="w-16 h-1 bg-red-500 rounded group-hover:animate-pulse delay-400"></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-3 flex space-x-1 group-hover:animate-bounce">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-200"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-ping delay-400"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Project Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} text-white`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{project.shortDesc} • {project.year}</p>
            {project.users && (
              <p className="text-cyan-400 text-xs mt-1">{project.users}</p>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {expandedProject === project.id ? project.detailedDescription : project.description}
        </p>
        
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-4 transition-colors"
        >
          {expandedProject === project.id ? 'Show Less' : 'Read More'}
        </button>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
              {tech.name}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.demo && (
            <a
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all hover:scale-105 transform flex items-center gap-2 shadow-lg"
            >
              <Eye size={16} />
              {project.id === 1 ? 'Visit Live Site' : 'Live Demo'}
            </a>
          )}
          {project.github && (
            <a
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-all hover:scale-105 transform flex items-center gap-2 shadow-lg"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;