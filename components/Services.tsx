
import React from 'react';
import { SERVICES_DATA } from '../constants.js';
import type { Service } from '../types.js';
import SectionHeader from './ui/SectionHeader.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { use3DTilt } from '../hooks/use3DTilt.js';

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
    const { ref, onMouseMove, onMouseLeave } = use3DTilt(10);

    return (
    <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="fade-in group interactive-card relative p-8 bg-brand-dark-800/50 border border-brand-dark-700 rounded-2xl"
        style={{ transitionDelay: `${index * 100}ms`, transformStyle: 'preserve-3d' }}
    >
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="card-glow"></div>
        </div>
        <div style={{ transform: 'translateZ(20px)' }}>
            <div className="flex items-start mb-6" style={{ transform: 'translateZ(60px)' }}>
                <div className="text-4xl text-gold-400 mr-6 mt-1">
                    <i className={service.icon}></i>
                </div>
                <div>
                    <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">{service.category}</span>
                    <h3 className="text-2xl font-bold text-white font-playfair">{service.title}</h3>
                </div>
            </div>
            <p className="mb-6 text-gray-400" style={{ transform: 'translateZ(40px)' }}>{service.description}</p>
            <ul className="space-y-3 text-gray-300" style={{ transform: 'translateZ(20px)' }}>
                {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                        <i className="fas fa-check-circle text-gold-500 mr-3"></i>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
};

const Services: React.FC = () => {
    useScrollAnimation();
    
    return (
        <section id="services" className="py-24 bg-brand-dark-900 sm:py-32">
            <div className="container px-6 mx-auto lg:px-8">
                <div className="fade-in">
                    <SectionHeader
                        badge="Our Expertise"
                        title="Professional Catering Services"
                        subtitle="Comprehensive shisha catering solutions tailored to your event requirements with the highest standards of service and quality."
                    />
                </div>
                <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;