
import React, { useState, useEffect, Suspense, lazy } from 'react';

// Lazy load components for better initial performance
const Header = lazy(() => import('./components/Header.js'));
const Hero = lazy(() => import('./components/Hero.js'));
const TrustIndicators = lazy(() => import('./components/TrustIndicators.js'));
const Services = lazy(() => import('./components/Services.js'));
const Packages = lazy(() => import('./components/Packages.js'));
const Testimonials = lazy(() => import('./components/Testimonials.js'));
const Contact = lazy(() => import('./components/Contact.js'));
const Footer = lazy(() => import('./components/Footer.js'));
const ScrollToTopButton = lazy(() => import('./components/ui/ScrollToTopButton.js'));

// Custom cursor component
const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest('a, button, input, select, textarea')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
            <div className={`cursor-outline ${isHovering ? 'hover' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
        </>
    );
};


const App: React.FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    
    return (
        <div className="bg-brand-dark-900 text-gray-300 transition-colors duration-500 font-inter selection:bg-gold-500/30">
            <CustomCursor />
            {loading && (
                <div className="fixed inset-0 bg-brand-dark-900 z-[9999] flex items-center justify-center transition-opacity duration-500">
                    <div className="relative flex items-center justify-center">
                        <div className="w-24 h-24 border-2 border-gold-500/20 rounded-full"></div>
                        <div className="w-24 h-24 border-t-2 border-gold-500 rounded-full animate-spin absolute"></div>
                        <i className="fas fa-crown text-3xl text-gold-500 absolute animate-pulse"></i>
                    </div>
                </div>
            )}
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-dark-800/60 via-brand-dark-900 to-brand-dark-900"></div>
            
            <Suspense fallback={<div></div>}>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main>
                    <Hero />
                    <TrustIndicators />
                    <Services />
                    <Packages />
                    <Testimonials />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTopButton />
            </Suspense>
        </div>
    );
};

export default App;