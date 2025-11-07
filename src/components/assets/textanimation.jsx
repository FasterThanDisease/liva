'use client'; // WICHTIG bei App-Router von Next.js

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FlyInText = ({ children, direction = 'bottom', index = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const animate = async () => {
            // ✅ Nur im Browser laden (verhindert SSR-Fehler!)
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            if (!ref.current) return;

            gsap.fromTo(
                ref.current,
                {
                    opacity: 0,
                    x: direction === 'left' ? -200 : direction === 'right' ? 200 : 0,
                    y: direction === 'top' ? -200 : direction === 'bottom' ? 200 : 0,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1,
                    delay: index * 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        };

        animate();
    }, [direction, index]);

    return (
        <div ref={ref} className="opacity-0">
            {children}
        </div>
    );
};

export default FlyInText;
