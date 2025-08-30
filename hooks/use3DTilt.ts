import { useRef, useCallback } from 'react';

/**
 * A custom hook to apply a 3D tilt effect on mouse move.
 * It provides a dynamic rotation, a moving shadow, and positions a glow effect.
 * @param {number} maxRotate - The maximum rotation angle in degrees.
 * @returns An object with a ref and event handlers to apply to the target element.
 */
export const use3DTilt = (maxRotate: number = 8) => {
    const elementRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const element = elementRef.current;
        if (!element) return;
        const { left, top, width, height } = element.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        const rotateX = (y - height / 2) / (height / 2) * -maxRotate;
        const rotateY = (x - width / 2) / (width / 2) * maxRotate;
        
        const shadowX = rotateY * -1.5;
        const shadowY = rotateX * 1.5;

        // Use a shorter transition for quick response while moving the cursor
        element.style.transition = 'transform 0.1s linear, box-shadow 0.1s linear';
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        element.style.boxShadow = `${shadowX}px ${shadowY}px 35px -8px rgba(0,0,0,0.6)`;
        element.style.setProperty('--glow-x', `${x}px`);
        element.style.setProperty('--glow-y', `${y}px`);
    }, [maxRotate]);

    const handleMouseLeave = useCallback(() => {
        const element = elementRef.current;
        if (!element) return;
        // Use a longer, smoother transition to animate back to the resting state
        element.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        element.style.boxShadow = 'none';
    }, []);

    return { ref: elementRef, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
};
