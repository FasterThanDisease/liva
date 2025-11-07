import React, { useEffect, useState } from 'react';

const CountUp = ({ target, suffix = '', duration = 2000, start = 0, className = '' }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        const steps = 60; // Anzahl der "Frames"
        const increment = (target - start) / steps;
        const intervalTime = duration / steps;

        let current = start;

        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            setCount(Math.floor(current));
        }, intervalTime);

        return () => clearInterval(interval);
    }, [target, duration, start]);

    return <span style={{ fontSize: '2.5em' }} className={className}>{count} {suffix}
    </span>;
};

export default CountUp;
