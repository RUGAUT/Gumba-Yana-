
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import YanaAIDemo from './components/YanaAIDemo';
import { PROJECTS, EXPERTISES } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo({ top: document.getElementById('contact')?.offsetTop ? document.getElementById('contact')!.offsetTop - 100 : 0, behavior: 'smooth' });
    setTimeout(() => setFormSubmitted(false), 8000);
  };

  const closeOverlay = () => setSelectedProject(null);

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/gumba_yana/', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/gaming/gumbayanagames', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/gumba-yana', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/+221766226062', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.893 9.889-.001 2.038.547 4.054 1.587 5.85l-.995 3.634 3.73-.979zm11.387-5.463c-.052-.085-.19-.138-.397-.242-.207-.104-1.226-.605-1.416-.673-.19-.069-.328-.104-.466.104-.138.207-.534.673-.655.811-.12.138-.241.155-.448.052-.207-.104-.874-.322-1.664-1.027-.615-.548-1.03-1.226-1.15-1.433-.12-.207-.013-.319.091-.422.094-.093.207-.242.31-.362.104-.121.138-.207.207-.346.069-.138.034-.259-.017-.362-.052-.104-.466-1.121-.638-1.535-.168-.404-.332-.349-.466-.355-.126-.005-.271-.006-.417-.006s-.384.055-.586.275c-.202.221-.772.753-.772 1.832s.785 2.118.895 2.266c.11.148 1.543 2.356 3.739 3.303.523.225.93.359 1.248.459.525.167 1.003.143 1.381.087.422-.063 1.226-.501 1.397-.984.172-.484.172-.898.121-.984z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-10 bg-orange-600/10 text-orange-400 text-[10px] font-black tracking-[0.4em] uppercase rounded-full border border-orange-500/20 animate-fade-in">
            Studio d'Expériences Ludiques & Gamification
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-gradient">
            L'ÉVEIL PAR <br />
            <span className="accent-gradient">LE JEU.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            Nous concevons des expériences ludiques pour apprendre, comprendre et s'engager autrement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#projects" className="px-10 py-5 bg-orange-600 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-all transform hover:scale-105 shadow-xl shadow-orange-950/40">
              Nos Réalisations
            </a>
            <a href="#contact" className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              Parlons Projet
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-600/5 blur-[120px] rounded-full z-0"></div>
      </section>

      {/* Section ADN (About) - AGRANDIE pour format HORIZONTAL */}
      <section id="about" className="py-40 px-6 bg-black/30 relative scroll-mt-20 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-20 items-center">
            {/* Logo Container - Wide and Horizontal focus */}
            <div className="lg:col-span-3 relative flex justify-center w-full">
              <div className="relative group w-full">
                 <div className="w-full h-[350px] md:h-[500px] glass-card rounded-[3rem] border-orange-500/20 flex flex-col items-center justify-center p-2 overflow-hidden shadow-2xl relative transition-all duration-500 group-hover:border-orange-500/40">
                    <img 
                      src="/LogoFormatVertical.jpeg" 
                      alt="Gümba Yana horizontal vision" 
                      className="w-full h-full object-contain md:object-cover rounded-[2.5rem] opacity-95 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-10 left-10 text-left z-10 px-8">
                        <p className="text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase mb-2">ADN Gümba Yana</p>
                        <p className="text-xl text-white font-black italic drop-shadow-md">"Le jeu est un outil sérieux."</p>
                    </div>
                 </div>
                 <div className="absolute -z-10 w-full h-full bg-orange-600/20 blur-[100px] rounded-full top-0 opacity-40"></div>
              </div>
            </div>

            {/* Content Container */}
            <div className="lg:col-span-2 text-left">
              <h2 className="text-5xl font-black mb-10 tracking-tight text-gradient uppercase">Notre ADN</h2>
              <div className="space-y-8">
                <p className="text-lg text-gray-300 leading-relaxed font-bold">
                  L’ADN de Gümba Yana repose sur une conviction forte : le jeu est un outil sérieux de transmission, d’apprentissage et d’engagement.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Nous concevons des expériences où le ludique rencontre le pédagogique, où la technologie dialogue avec la culture.
                </p>
                
                <div className="grid grid-cols-1 gap-6 pt-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                     <span className="text-3xl">🎮</span>
                     <div>
                       <h4 className="text-orange-400 font-black uppercase text-xs">Langage Universel</h4>
                       <p className="text-[10px] text-gray-500">Sensibiliser et mobiliser par l'interaction.</p>
                     </div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                     <span className="text-3xl">🧠</span>
                     <div>
                       <h4 className="text-orange-400 font-black uppercase text-xs">Rigueur Pédagogique</h4>
                       <p className="text-[10px] text-gray-500">Apprentissage par l'émotion et l'expérience.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section id="expertise" className="py-40 px-6 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
            <h2 className="text-5xl font-black tracking-tighter text-gradient uppercase">Expertises</h2>
            <div className="text-5xl float-anim">👩🏾‍🔬</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {EXPERTISES.map((exp) => (
              <div key={exp.title} className="glass-card p-12 rounded-[2.5rem] group hover:bg-white/[0.04]">
                <div className="text-5xl mb-10 opacity-50 group-hover:opacity-100 transition-opacity">{exp.icon}</div>
                <h3 className="text-xl font-black mb-8 text-white uppercase tracking-tight">{exp.title}</h3>
                <ul className="space-y-4">
                  {exp.items.map(item => (
                    <li key={item} className="flex items-start text-gray-400 text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-4 mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-40 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto text-left">
          <div className="mb-24 flex justify-between items-end">
             <h2 className="text-5xl font-black mb-6 tracking-tighter text-gradient uppercase">Produits <br/>& Projets</h2>
             <div className="text-7xl float-anim mb-4 hidden md:block">📱</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Overlay Détail Projet */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={closeOverlay}></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0807] rounded-[3rem] border border-orange-500/10 shadow-2xl glass-card animate-scale-up">
            <div className="sticky top-0 z-20 flex justify-between items-center p-8 bg-[#0a0807]/90 backdrop-blur-md border-b border-white/5">
              <h3 className="text-xl font-black tracking-tighter uppercase">{selectedProject.title}</h3>
              <button onClick={closeOverlay} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600/20 transition-colors border border-white/10 text-white font-bold">✕</button>
            </div>

            <div className="p-8 md:p-16 text-left">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Image adaptative selon le format (smartphone vs tablette) */}
                <div className="relative flex justify-center">
                   {selectedProject.aspect === 'horizontal' ? (
                     // Format Tablette / Horizontal
                     <div className="w-full aspect-video bg-black rounded-[2.5rem] border-[10px] border-white/10 shadow-2xl overflow-hidden relative">
                        <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
                        <div className="absolute top-1/2 left-2 -translate-y-1/2 w-1.5 h-8 bg-white/10 rounded-full"></div> {/* Tablet side button */}
                     </div>
                   ) : (
                     // Format Smartphone / Vertical
                     <div className="w-full max-w-[340px] aspect-[9/16] bg-black rounded-[3.5rem] border-[10px] border-white/10 shadow-2xl overflow-hidden relative">
                        <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-3xl"></div> {/* Mockup Notch */}
                     </div>
                   )}
                </div>

                <div className="space-y-8">
                   <h4 className="text-4xl font-black uppercase text-white tracking-tighter">{selectedProject.title}</h4>
                   <p className="text-orange-400 font-bold uppercase tracking-widest text-xs">{selectedProject.type}</p>
                   <p className="text-gray-400 leading-relaxed text-lg">{selectedProject.details?.fullDescription || selectedProject.description}</p>
                   
                   <div className="space-y-6 pt-6">
                      {selectedProject.details?.features.map(f => (
                        <div key={f.title} className="flex gap-5 items-start p-5 bg-white/5 rounded-2xl border border-white/5">
                           <span className="text-3xl">{f.icon}</span>
                           <div>
                              <h5 className="font-black uppercase text-xs text-white mb-1">{f.title}</h5>
                              <p className="text-[11px] text-gray-500 leading-snug">{f.description}</p>
                           </div>
                        </div>
                      ))}
                   </div>

                   <div className="pt-8 flex flex-col gap-4">
                      {selectedProject.playUrl && (
                        <a href={selectedProject.playUrl} target="_blank" className="w-full py-6 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-full text-center uppercase text-xs tracking-[0.3em] transition-all shadow-xl shadow-orange-950/40 transform hover:scale-[1.02]">
                          {selectedProject.details?.ctaText || "Lancer l'expérience"}
                        </a>
                      )}
                      <button onClick={closeOverlay} className="w-full py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-full uppercase text-xs tracking-[0.3em] transition-all border border-white/10">
                        Fermer
                      </button>
                   </div>
                </div>
              </div>

              {/* Specific AI Demo for Yana */}
              {selectedProject.id === 'yana' && (
                <div className="mt-24 pt-24 border-t border-white/5">
                   <YanaAIDemo />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Section Contact */}
      <section id="services" className="py-40 px-6 bg-black/50 border-t border-orange-500/5 relative overflow-hidden scroll-mt-20 text-left">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-6 tracking-tighter text-gradient uppercase">Démarrer une <br/>Collaboration</h2>
          </div>

          <div id="contact" className="glass-card p-8 md:p-20 rounded-[4rem] border-orange-500/10 shadow-2xl relative scroll-mt-32">
            {formSubmitted ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center mx-auto mb-10 text-5xl">🌳</div>
                <h3 className="text-3xl font-black mb-4 uppercase">Message Transmis</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-4">Email</label>
                    <input type="email" placeholder="votre@email.com" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl outline-none text-white focus:border-orange-500/50 transition-all font-medium" />
                  </div>
                </div>
                <button type="submit" className="w-full py-8 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-full text-xs uppercase tracking-[0.4em] transition-all shadow-2xl shadow-orange-950/40">
                  Envoyer ma Demande
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-orange-500/10 bg-black/40 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center mb-16">
            <div className="flex items-center space-x-4">
              <div className="h-14 w-auto overflow-hidden rounded-xl bg-white/5 p-1 border border-white/10">
                <img src="/LogoFormatHorizental.jpeg" alt="Gümba Yana Logo" className="h-full w-auto object-contain" />
              </div>
              <div className="text-3xl font-black tracking-tighter uppercase">GÜMBA <span className="text-orange-500">YANA</span></div>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:text-orange-500 hover:border-orange-500 transition-all transform hover:scale-110">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-center">
             <a href="mailto:contact@gumbayana.com" className="text-orange-400 font-black tracking-widest text-[10px] uppercase hover:text-white transition-colors">
                contact@gumbayana.com
             </a>
             <p className="mt-4 text-[9px] font-bold text-gray-700 uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} GÜMBA YANA.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
