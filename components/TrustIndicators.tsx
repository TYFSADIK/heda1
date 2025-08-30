
import React, { useEffect, useRef, useState } from 'react';
import { TRUST_DATA } from '../constants.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const CountUp: React.FC<{ end: number; suffix: string }> = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000;
        const stepTime = 1000 / 60;
        const totalSteps = Math.round(duration / stepTime);
        const increment = end / totalSteps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            start += increment;
            setCount(Math.floor(start));

            if (currentStep >= totalSteps) {
                setCount(end);
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [end, isInView]);

    return (
        <div ref={ref} className="text-5xl font-bold tracking-tight font-playfair sm:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-gold-400 to-gold-600">
            {count}{suffix}
        </div>
    );
};

const TrustIndicators: React.FC = () => {
    useScrollAnimation();

    return (
        <section className="py-24 bg-brand-dark-800/50 sm:py-32">
            <div className="container px-6 mx-auto lg:px-8">
                <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                    {TRUST_DATA.map((item, index) => {
                        const numericValue = parseInt(item.number.replace(/\D/g, '')) || 0;
                        const suffix = item.number.replace(/\d/g, '');
                        return (
                            <div key={index} className="fade-in flex flex-col items-center p-6 bg-brand-dark-700/30 rounded-xl border border-brand-dark-600/50" style={{ transitionDelay: `${index * 100}ms` }}>
                                {numericValue > 0 ? <CountUp end={numericValue} suffix={suffix} /> : 
                                    <div className="text-5xl font-bold tracking-tight font-playfair sm:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-gold-400 to-gold-600">{item.number}</div>}
                                <div className="mt-3 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                                    {item.label}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;