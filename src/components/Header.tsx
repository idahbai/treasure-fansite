import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            TREASURE
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Beranda', 'Tentang', 'Perjalanan', 'Member', 'Diskografi', 'Galeri'].map((item, index) => {
              const sections = ['hero', 'about', 'timeline', 'members', 'discography', 'gallery'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sections[index])}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              );
            })}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {['Beranda', 'Tentang', 'Perjalanan', 'Member', 'Diskografi', 'Galeri'].map((item, index) => {
                const sections = ['hero', 'about', 'timeline', 'members', 'discography', 'gallery'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sections[index])}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-left"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;