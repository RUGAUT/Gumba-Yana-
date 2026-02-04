
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="glass-card rounded-[2.5rem] overflow-hidden group h-full flex flex-col border-orange-500/10 hover:border-orange-500/40">
      <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => onClick(project)}>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-6 left-8">
          <span className="px-4 py-1.5 bg-orange-600/20 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-orange-500/30 text-orange-400">
            {project.type}
          </span>
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow text-left">
        <h3 className="text-3xl font-extrabold mb-4 group-hover:text-orange-400 transition-colors uppercase tracking-tighter cursor-pointer" onClick={() => onClick(project)}>
          {project.title}
        </h3>
        <p className="text-orange-500/80 text-xs font-black uppercase tracking-widest mb-6">
          {project.objective}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button 
            onClick={() => onClick(project)}
            className="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all border border-white/5"
          >
            Découvrir
          </button>
          {project.playUrl && (
            <a 
              href={project.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-orange-600 hover:bg-orange-500 text-white font-black text-[10px] uppercase tracking-widest rounded-xl text-center transition-all shadow-lg shadow-orange-950/20"
            >
              Jouer
            </a>
          )}
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <div className="flex -space-x-2">
             <div className="w-8 h-8 rounded-full border-2 border-[#0a0807] bg-orange-600/30"></div>
             <div className="w-8 h-8 rounded-full border-2 border-[#0a0807] bg-amber-500/30"></div>
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            {project.target}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
