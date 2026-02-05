
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const isHorizontal = project.aspect === 'horizontal';

  return (
    <div className={`glass-card rounded-[2rem] overflow-hidden group h-full flex flex-col border-orange-500/10 hover:border-orange-500/40 ${isHorizontal ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      {/* Ratio plus compact */}
      <div className={`relative ${isHorizontal ? 'aspect-video' : 'aspect-[4/5]'} overflow-hidden cursor-pointer`} onClick={() => onClick(project)}>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-6">
          <span className="px-3 py-1 bg-orange-600/20 backdrop-blur-md text-[8px] font-black uppercase tracking-[0.2em] rounded-full border border-orange-500/30 text-orange-400">
            {project.type}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="text-lg font-black mb-2 group-hover:text-orange-400 transition-colors uppercase tracking-tighter cursor-pointer" onClick={() => onClick(project)}>
          {project.title}
        </h3>
        <p className="text-orange-500/80 text-[9px] font-black uppercase tracking-widest mb-3">
          {project.objective}
        </p>
        <p className="text-gray-400 text-[11px] leading-relaxed mb-6 flex-grow line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onClick(project)}
            className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white font-black text-[8px] uppercase tracking-widest rounded-lg transition-all border border-white/5"
          >
            Détails
          </button>
          {project.playUrl && !project.playUrl.startsWith('#') && (
            <a 
              href={project.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-black text-[8px] uppercase tracking-widest rounded-lg text-center transition-all shadow-lg shadow-orange-950/20"
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
