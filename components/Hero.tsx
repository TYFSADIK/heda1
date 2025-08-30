
import React, { useEffect, useRef } from 'react';
import Button from './ui/Button.js';

// Particle component for the background effect
const Particles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
                this.x += this.speedX;
                this.y += this.speedY;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'rgba(201, 169, 110, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let particlesArray: Particle[] = [];
        const numberOfParticles = 50;
        
        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 1.5 + 0.5;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedX = Math.random() * 0.4 - 0.2;
                const speedY = Math.random() * 0.4 - 0.2;
                particlesArray.push(new Particle(x, y, size, speedX, speedY));
            }
        }
        
        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50"></canvas>;
};


const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-brand-dark-900">
            <Particles />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-900 via-transparent to-brand-dark-900"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-transparent to-transparent animate-pulse-slow opacity-70"></div>
            
            <div className="relative z-10 p-6 flex flex-col items-center animate-fade-in-up">
                <span className="inline-block px-5 py-2 mb-8 text-sm font-semibold tracking-wider text-gold-400 uppercase bg-gold-500/10 border border-gold-500/20 rounded-full backdrop-blur-sm">
                    Premium Event Catering
                </span>
                <div className="mb-6 text-7xl text-gold-400 animate-float-3d">
                    <i className="fas fa-crown"></i>
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-transparent lg:text-8xl font-playfair bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 animate-text-shine">
                    Crown Shisha Catering
                </h1>
                <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-gray-400">
                    Professional shisha catering services for corporate events, weddings, and private functions throughout Toronto GTA.
                </p>

                <div className="flex flex-col items-center justify-center gap-6 mt-10 sm:flex-row sm:gap-10">
                    <div className="flex items-center space-x-3 text-gray-300">
                        <i className="fas fa-shield-alt text-gold-500 text-xl"></i>
                        <span className="font-semibold">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                        <i className="fas fa-users text-gold-500 text-xl"></i>
                        <span className="font-semibold">Professional Staff</span>
                    </div>
                     <div className="flex items-center space-x-3 text-gray-300">
                        <i className="fas fa-clock text-gold-500 text-xl"></i>
                        <span className="font-semibold">24/7 Service</span>
                    </div>
                </div>

                <div className="flex flex-col gap-5 mt-12 sm:flex-row">
                    <Button href="#contact" variant="primary">Request Consultation</Button>
                    <Button href="#services" variant="secondary">View Services</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;