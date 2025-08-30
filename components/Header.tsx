
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants.js';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const ThemeToggleButton = () => (
        <button onClick={toggleTheme} className="relative w-14 h-7 rounded-full p-1 bg-brand-dark-700/50 border border-brand-dark-600 flex items-center transition-colors duration-300" aria-label="Toggle theme">
             <div className={`absolute top-1/2 -translate-y-1/2 left-2 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                <i className="fas fa-moon text-gold-500 text-xs"></i>
            </div>
            <div className={`w-5 h-5 rounded-full bg-white transform transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'translate-x-0' : 'translate-x-7'}`}></div>
            <div className={`absolute top-1/2 -translate-y-1/2 right-2 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
                <i className="fas fa-sun text-yellow-400 text-xs"></i>
            </div>
        </button>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark-900/80 backdrop-blur-lg border-b border-brand-dark-700' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="flex items-center space-x-3 group">
                    <i className="fas fa-crown text-4xl text-gold-500 group-hover:animate-pulse"></i>
                    <div className="flex flex-col leading-tight">
                        <span className="font-playfair font-bold text-2xl text-white">Crown Shisha</span>
                        <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">Catering</span>
                    </div>
                </a>
                
                <div className="hidden lg:flex items-center space-x-10">
                    {NAV_LINKS.map(link => (
                        <a key={link.href} href={link.href} className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors relative group">
                            {link.label}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-500 rounded-full transform transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <ThemeToggleButton />
                    <a href="#contact" className="hidden lg:inline-block px-6 py-2.5 text-sm font-bold tracking-wider uppercase rounded-lg transition-all duration-300 bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:shadow-lg hover:shadow-gold-500/30 transform hover:-translate-y-0.5">
                        Get Quote
                    </a>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white text-2xl z-50">
                        <i className={`fas transition-transform duration-300 ${isMenuOpen ? 'fa-times rotate-90' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-brand-dark-900/95 backdrop-blur-xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-10">
                     {NAV_LINKS.map(link => (
                        <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium uppercase tracking-wider text-gray-300 hover:text-gold-400 transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-8 px-8 py-4 text-lg font-bold tracking-wider uppercase rounded-lg transition-all duration-300 bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:shadow-lg hover:shadow-gold-500/30 transform hover:-translate-y-0.5">
                        Get Quote
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;