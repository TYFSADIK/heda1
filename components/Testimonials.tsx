
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants.js';
import type { Testimonial } from '../types.js';
import SectionHeader from './ui/SectionHeader.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const TestimonialCard: React.FC<{ testimonial: Testimonial, index: number }> = ({ testimonial, index }) => (
    <div
        className="fade-in flex flex-col p-8 bg-brand-dark-800/50 border border-brand-dark-700 rounded-2xl"
        style={{ transitionDelay: `${index * 100}ms` }}
    >
        <div className="flex-grow relative">
            <i className="fas fa-quote-left text-7xl text-gold-500/10 absolute -top-6 -left-4 -z-10"></i>
            <p className="relative text-gray-300 italic z-10">"{testimonial.quote}"</p>
        </div>
        <div className="flex items-center mt-8 pt-6 border-t border-brand-dark-700">
            <div className="flex-grow">
                <p className="font-bold text-white text-lg">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
            <div className="flex text-gold-400 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                ))}
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    useScrollAnimation();
    
    return (
        <section id="testimonials" className="py-24 bg-brand-dark-900 sm:py-32">
            <div className="container px-6 mx-auto lg:px-8">
                <div className="fade-in">
                    <SectionHeader
                        badge="Client Reviews"
                        title="What Our Clients Say"
                        subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about our professional catering services."
                    />
                </div>
                <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;