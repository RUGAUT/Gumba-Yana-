
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Qui sommes-nous ?', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projets', href: '#projects' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-card rounded-2xl px-8 h-20 flex justify-between items-center ${scrolled ? 'bg-black/60 border-orange-500/20 shadow-lg shadow-orange-950/20' : 'bg-transparent border-transparent'}`}>
          <div className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="h-12 w-auto overflow-hidden rounded-lg transition-transform group-hover:scale-105 duration-300">
              <img 
                src="./LogoFormatHorizental.jpeg" 
                alt="Gümba Yana Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase hidden sm:inline-block">
              GÜMBA <span className="text-orange-500">YANA</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-400 hover:text-orange-400 transition-colors tracking-[0.15em] uppercase"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-black rounded-full transition-all uppercase tracking-[0.2em] shadow-lg shadow-orange-900/30">
              Parlons Projet
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-orange-500/20 animate-fade-in">
          <div className="px-6 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-black text-white py-2 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 bg-orange-600 text-center rounded-xl font-black uppercase text-xs tracking-widest"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
