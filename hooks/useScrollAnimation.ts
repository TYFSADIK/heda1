
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
    const animatedElementsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const elements = document.querySelectorAll('.fade-in');
        animatedElementsRef.current = Array.from(elements) as HTMLElement[];
        animatedElementsRef.current.forEach(el => observer.observe(el));

        return () => {
            animatedElementsRef.current.forEach(el => observer.unobserve(el));
        };
    }, []);
};

// Add this to your global stylesheet or a style tag in index.html
/*
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.fade-in.is-visible {
    opacity: 1;
    transform: translateY(0);
}
*/
// We will add the CSS via Tailwind config instead for a cleaner approach.
