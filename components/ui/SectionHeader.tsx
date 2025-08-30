import React from 'react';

interface SectionHeaderProps {
    badge: string;
    title: string;
    subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, subtitle }) => {
    return (
        <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-5 py-2 text-sm font-semibold tracking-widest text-gold-400 uppercase bg-gold-500/10 border border-gold-500/20 rounded-full backdrop-blur-sm">
                {badge}
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight font-playfair sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 animate-text-shine">
                {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionHeader;