
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
        
        <div className="absolute -bottom-20 -right-20 md:right-0 opacity-20 md:opacity-100 pointer-events-none transition-all duration-1000 transform hover:scale-105">
           <div className="text-[20rem] md:text-[30rem] float-anim drop-shadow-[0_20px_50px_rgba(249,115,22,0.4)]">👩🏾‍💼</div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-600/5 blur-[120px] rounded-full z-0"></div>
      </section>

      {/* Section ADN (About) with Vertical Logo */}
      <section id="about" className="py-40 px-6 bg-black/30 relative scroll-mt-20 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative group">
               {/* Container for LogoFormatVertical.jpeg */}
               <div className="w-80 h-[550px] glass-card rounded-[4rem] border-orange-500/20 flex flex-col items-center justify-center p-4 overflow-hidden shadow-2xl relative transition-all duration-500 group-hover:border-orange-500/40">
                  <img 
                    src="./LogoFormatVertical.jpeg" 
                    alt="Gümba Yana Vertical Logo" 
                    className="w-full h-full object-cover rounded-[3.5rem] opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-12 text-center z-10 px-8">
                      <p className="text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase mb-4">ADN Gümba Yana</p>
                      <p className="text-sm text-white font-medium italic drop-shadow-md">"L'équilibre entre ludique et professionnel."</p>
                  </div>
               </div>
               {/* Background Glow */}
               <div className="absolute -z-10 w-full h-full bg-orange-600/20 blur-[80px] rounded-full top-0 scale-75"></div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-10 -left-10 text-[8rem] opacity-40 float-anim pointer-events-none delay-700">👵🏾</div>
          </div>

          <div className="text-left">
            <h2 className="text-5xl font-black mb-10 tracking-tight text-gradient uppercase">Notre ADN</h2>
            <div className="space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed font-bold">
                L’ADN de Gümba Yana repose sur une conviction forte : le jeu est un outil sérieux de transmission, d’apprentissage et d’engagement.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Nous concevons des expériences où le ludique rencontre le pédagogique, où la technologie dialogue avec la culture, et où la créativité devient un levier d’impact durable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                   <h4 className="text-orange-400 font-black uppercase text-xs mb-3">🎮 Langage Universel</h4>
                   <p className="text-xs text-gray-500">Le jeu est un outil méthodologique pour sensibiliser et mobiliser.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                   <h4 className="text-orange-400 font-black uppercase text-xs mb-3">🧠 Rigueur Pédagogique</h4>
                   <p className="text-xs text-gray-500">Apprentissage par l'expérience, l'interaction et l'émotion.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                   <h4 className="text-orange-400 font-black uppercase text-xs mb-3">🌍 Ancrage Culturel</h4>
                   <p className="text-xs text-gray-500">Valoriser les richesses africaines avec modernité sans stéréotypes.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                   <h4 className="text-orange-400 font-black uppercase text-xs mb-3">🚀 Innovation Utile</h4>
                   <p className="text-xs text-gray-500">IA et digital au service du sens et de l'impact social.</p>
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
            <div className="text-left">
              <h2 className="text-5xl font-black mb-4 tracking-tighter text-gradient uppercase">Expertises</h2>
            </div>
            <div className="flex items-center space-x-6 glass-card px-8 py-4 rounded-full border-orange-500/10">
               <div className="text-5xl drop-shadow-lg">👩🏾‍🔬</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {EXPERTISES.map((exp) => (
              <div key={exp.title} className="glass-card p-12 rounded-[2.5rem] group relative overflow-hidden">
                <div className="text-5xl mb-10 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{exp.icon}</div>
                <h3 className="text-xl font-black mb-8 text-white uppercase tracking-tight leading-tight">{exp.title}</h3>
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
             <div className="text-7xl float-anim mb-4 hidden md:block">👩🏾‍🎨</div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
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
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0a0807] rounded-[3rem] border border-orange-500/10 shadow-2xl glass-card animate-scale-up">
            <div className="sticky top-0 z-20 flex justify-between items-center p-8 bg-[#0a0807]/90 backdrop-blur-md border-b border-white/5">
              <h3 className="text-2xl font-black tracking-tighter uppercase">{selectedProject.title}</h3>
              <button onClick={closeOverlay} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600/20 transition-colors border border-white/10 text-white font-bold">✕</button>
            </div>

            <div className="p-8 md:p-20 text-left">
              {/* Contenu spécifique Yana */}
              {selectedProject.id === 'yana' && (
                <div className="mb-24 space-y-20 text-left">
                  <div className="p-10 bg-orange-600/10 rounded-[3rem] border border-orange-500/20 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
                       <img src="./Yana.png" alt="Yana Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-4xl font-black uppercase text-white mb-4 tracking-tighter">Prototype disponible en démo</h4>
                      <p className="text-xl text-orange-400 font-bold mb-6">Redécouvrez nos langues. Reconnectez-vous à votre culture.</p>
                      <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl">Wolof, Peulh, Sérère, Diola, Soninké... Redécouvrez la richesse du Sénégal avec Bayo, votre compagnon d'apprentissage.</p>
                      <div className="flex flex-wrap gap-4">
                         <a href="#waitlist-yana" className="px-10 py-5 bg-orange-600 text-white font-black text-xs uppercase tracking-widest rounded-full shadow-xl shadow-orange-950/40">Rejoindre la liste</a>
                         <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-full">Voir la solution</button>
                      </div>
                    </div>
                  </div>

                  {/* Demo IA Interactif Yana */}
                  <div className="mb-20">
                     <YanaAIDemo />
                  </div>

                  <div id="waitlist-yana" className="p-16 bg-white/5 rounded-[4rem] border border-orange-500/20 text-center relative overflow-hidden">
                    <h4 className="text-4xl font-black uppercase mb-6">Rejoignez l'aventure !</h4>
                    <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                       <div className="md:col-span-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4 mb-2 block">Email</label>
                          <input type="email" placeholder="votre@email.com" required className="w-full px-8 py-5 bg-black/60 rounded-2xl border border-white/10 outline-none focus:border-orange-500 transition-all" />
                       </div>
                       <div className="md:col-span-2 pt-6">
                          <button className="w-full py-7 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-full uppercase text-xs tracking-[0.3em] shadow-2xl transition-all">Rejoindre la liste d'attente</button>
                       </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Contenu spécifique BaoBloom */}
              {selectedProject.id === 'baobloom' && (
                <div className="mb-24 space-y-24 text-left">
                  <div className="relative rounded-[4rem] overflow-hidden min-h-[600px] flex items-center justify-center p-8 md:p-20 border-8 border-white/10 text-center" 
                       style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #E0F7FA 40%, #A5D6A7 70%, #4CAF50 100%)' }}>
                    
                    <div className="absolute top-20 left-10 text-8xl opacity-60">☁️</div>
                    <div className="absolute top-40 right-20 text-7xl opacity-40">☁️</div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <h4 className="text-7xl md:text-[10rem] font-black mb-12 tracking-tight text-white uppercase italic drop-shadow-[0_15px_0_#D81B60] leading-none" 
                          style={{ fontStyle: 'italic', WebkitTextStroke: '2px #D81B60' }}>
                        BAO<br/><span className="text-green-300 drop-shadow-[0_15px_0_#2E7D32]" style={{ WebkitTextStroke: '2px #2E7D32' }}>BLOOM</span>
                      </h4>

                      <a href={selectedProject.playUrl} target="_blank" rel="noopener noreferrer" 
                         className="group relative px-20 py-8 bg-[#8BC34A] hover:bg-[#7CB342] text-white font-black text-5xl uppercase tracking-widest rounded-[3rem] border-[6px] border-[#33691E] shadow-[0_15px_0_#33691E] transition-all transform active:translate-y-2 active:shadow-none inline-block overflow-hidden">
                        <span className="relative z-10 drop-shadow-lg">PLAY</span>
                        <div className="absolute top-1 left-4 right-4 h-6 bg-white/30 rounded-full"></div>
                      </a>

                      <p className="mt-16 text-2xl text-[#1B5E20] font-black uppercase tracking-tighter drop-shadow-sm max-w-2xl italic">
                        "Fusionnez les fruits pour débloquer les richesses de l'Afrique !"
                      </p>
                    </div>

                    <div className="absolute bottom-0 right-0 w-full h-full opacity-30 pointer-events-none flex justify-center items-end">
                       <div className="absolute bottom-20 left-10 text-9xl float-anim">🍉</div>
                       <div className="absolute bottom-40 right-20 text-9xl float-anim delay-1000">🍌</div>
                       <div className="absolute top-40 left-1/4 text-7xl float-anim delay-500">🌶️</div>
                       <div className="absolute bottom-1/2 right-1/4 text-6xl float-anim delay-700">🥬</div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-24 items-center">
                     <div className="space-y-12">
                        <h5 className="text-5xl font-black uppercase tracking-tighter text-pink-500">Le "Suika" Africain</h5>
                        <p className="text-gray-400 text-xl leading-relaxed">
                          Inspiré par le hit mondial "Suika Game", BaoBloom réinvente la mécanique de fusion avec une touche culturelle unique.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="p-10 bg-white/5 rounded-[3rem] border-b-8 border-[#33691E]">
                              <div className="text-5xl mb-6">🎯</div>
                              <h6 className="font-black text-xs uppercase tracking-widest text-green-500 mb-4">Objectif</h6>
                              <p className="text-sm text-gray-500">Fusionnez les éléments identiques pour atteindre le fruit final.</p>
                           </div>
                           <div className="p-10 bg-white/5 rounded-[3rem] border-b-8 border-pink-500">
                              <div className="text-5xl mb-6">🌍</div>
                              <h6 className="font-black text-xs uppercase tracking-widest text-pink-400 mb-4">Voyage</h6>
                              <p className="text-sm text-gray-500">Débloquez des informations culturelles sur chaque pays.</p>
                           </div>
                        </div>
                     </div>
                     <div className="relative group text-center">
                        <img src="./BaoBloom.jpeg" className="relative z-10 rounded-[4rem] shadow-2xl border-8 border-white/5 mx-auto" alt="BaoBloom Screen" />
                     </div>
                  </div>
                </div>
              )}

              {/* Contenu générique pour les autres projets */}
              {selectedProject.id !== 'yana' && selectedProject.id !== 'baobloom' && selectedProject.details && (
                <div className="space-y-20 text-left">
                   <div className="grid lg:grid-cols-2 gap-20 items-center text-left">
                     <div>
                       <h4 className="text-5xl font-black mb-10 leading-tight tracking-tighter uppercase">{selectedProject.title}</h4>
                       <p className="text-gray-400 text-xl leading-relaxed mb-12">{selectedProject.details.fullDescription}</p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                         {selectedProject.details.features.map(f => (
                           <div key={f.title} className="p-8 bg-white/5 rounded-3xl border border-white/5 text-left">
                             <div className="text-4xl mb-6">{f.icon}</div>
                             <h5 className="text-lg font-bold mb-4 uppercase">{f.title}</h5>
                             <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                           </div>
                         ))}
                       </div>
                       <a href={selectedProject.playUrl} className="inline-block px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-xl shadow-orange-950/40">
                         {selectedProject.details.ctaText}
                       </a>
                     </div>
                     <div className="relative">
                        <img src={selectedProject.details.heroImage} className="rounded-[3rem] shadow-2xl" alt={selectedProject.title} />
                     </div>
                   </div>
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
              <div className="text-center py-20 animate-fade-in">
                <div className="w-24 h-24 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center mx-auto mb-10 text-5xl shadow-[0_0_30px_rgba(249,115,22,0.3)]">🌳</div>
                <h3 className="text-3xl font-black mb-4 uppercase">Message Transmis</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12 text-left">
                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-4">Email</label>
                    <input type="email" placeholder="votre@email.com" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl outline-none text-white focus:border-orange-500/50 transition-all font-medium" />
                  </div>
                </div>
                <button type="submit" className="w-full py-8 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-full text-xs uppercase tracking-[0.4em] transition-all shadow-2xl shadow-orange-950/40 transform hover:scale-[1.01]">
                  Envoyer ma Demande
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer with LogoFormatHorizental.jpeg */}
      <footer className="py-24 px-6 border-t border-orange-500/10 bg-black/40 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center mb-16">
            <div className="flex items-center space-x-4">
              <div className="h-14 w-auto overflow-hidden rounded-xl bg-white/5 p-1 shadow-lg border border-white/10">
                <img 
                  src="./LogoFormatHorizental.jpeg" 
                  alt="Gümba Yana Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="text-3xl font-black tracking-tighter uppercase">GÜMBA <span className="text-orange-500">YANA</span></div>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:text-orange-500 hover:border-orange-500 transition-all transform hover:scale-110"
                  aria-label={social.name}
                >
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
