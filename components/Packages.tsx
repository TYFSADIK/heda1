
import React from 'react';
import { PACKAGES_DATA } from '../constants.js';
import type { Package } from '../types.js';
import SectionHeader from './ui/SectionHeader.js';
import Button from './ui/Button.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { use3DTilt } from '../hooks/use3DTilt.js';

const PackageCard: React.FC<{ pkg: Package, index: number }> = ({ pkg, index }) => {
    const { ref, onMouseMove, onMouseLeave } = use3DTilt(5); // A slightly softer tilt effect

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className={`fade-in group interactive-card relative flex flex-col p-8 bg-brand-dark-800/60 rounded-2xl
                ${pkg.isFeatured ? 'featured-package' : 'border border-brand-dark-700'}`}
            style={{ transitionDelay: `${index * 100}ms`, transformStyle: 'preserve-3d' }}
        >
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="card-glow"></div>
            </div>
            {pkg.isFeatured && (
                <div style={{ transform: 'translateZ(50px)' }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 text-xs font-bold tracking-wider text-black uppercase bg-gradient-to-r from-gold-400 to-gold-500 rounded-full">
                    Most Popular
                </div>
            )}
            <div className="flex-grow" style={{ transform: 'translateZ(20px)' }}>
                <h3 className="text-3xl font-bold text-center text-white font-playfair">{pkg.name}</h3>
                <p className="mt-2 text-sm text-center text-gray-400">{pkg.subtitle}</p>
                <ul className="my-8 space-y-4 text-gray-300">
                    {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                            <i className="fas fa-check-circle text-gold-500 mr-4"></i>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-auto text-center" style={{ transform: 'translateZ(30px)' }}>
                 <Button href="#contact" variant={pkg.isFeatured ? 'primary' : 'secondary'} className="w-full">Get Quote</Button>
            </div>
        </div>
    );
}

const Packages: React.FC = () => {
    useScrollAnimation();

    return (
        <section id="packages" className="py-24 bg-brand-dark-800/50 sm:py-32">
             <div className="container px-6 mx-auto lg:px-8">
                <div className="fade-in">
                    <SectionHeader
                        badge="Service Packages"
                        title="Professional Service Packages"
                        subtitle="Choose from our carefully crafted service packages designed to meet various event requirements and budgets."
                    />
                </div>
                <div className="grid max-w-md grid-cols-1 gap-8 mx-auto mt-20 lg:max-w-none lg:grid-cols-3">
                    {PACKAGES_DATA.map((pkg, index) => (
                        <PackageCard key={pkg.name} pkg={pkg} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;