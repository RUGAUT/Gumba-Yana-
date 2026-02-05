
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const isHorizontal = project.aspect === 'horizontal';

  return (
    <div className={`glass-card rounded-[2.5rem] overflow-hidden group h-full flex flex-col border-orange-500/10 hover:border-orange-500/40 ${isHorizontal ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      {/* Ratio dynamique selon le type de projet */}
      <div className={`relative ${isHorizontal ? 'aspect-video' : 'aspect-[9/16]'} overflow-hidden cursor-pointer`} onClick={() => onClick(project)}>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-6 left-8">
          <span className="px-4 py-1.5 bg-orange-600/20 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-orange-500/30 text-orange-400">
            {project.type}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="text-2xl font-black mb-3 group-hover:text-orange-400 transition-colors uppercase tracking-tighter cursor-pointer" onClick={() => onClick(project)}>
          {project.title}
        </h3>
        <p className="text-orange-500/80 text-[10px] font-black uppercase tracking-widest mb-4">
          {project.objective}
        </p>
        <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => onClick(project)}
            className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white font-black text-[9px] uppercase tracking-widest rounded-xl transition-all border border-white/5"
          >
            Détails
          </button>
          {project.playUrl && !project.playUrl.startsWith('#') && (
            <a 
              href={project.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-orange-600 hover:bg-orange-500 text-white font-black text-[9px] uppercase tracking-widest rounded-xl text-center transition-all shadow-lg shadow-orange-950/20"
            >
              Lancer
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
