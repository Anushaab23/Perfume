import React, { useRef } from 'react';
import './Ingredients.css';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Ingredients = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 30,
        restDelta: 0.001
    });

    const headerY = useTransform(smoothProgress, [0, 0.4], [50, 0]);
    const headerOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
    const headerScale = useTransform(smoothProgress, [0, 0.3], [0.95, 1]);

    const flowers = [
        { src: '/flower1.png', id: 1, name: 'Santal Wood', col: 0, row: 0 },
        { src: '/flower2.png', id: 2, name: 'White Jasmine', col: 1, row: 0 },
        { src: '/flower3.png', id: 3, name: 'Sicilian Lemon', col: 2, row: 0 },
        { src: '/flower4.png', id: 4, name: 'Amber Glow', col: 0, row: 1 },
        { src: '/flower5.png', id: 5, name: 'Damask Rose', col: 1, row: 1 },
        { src: '/flower6.png', id: 6, name: 'Velvet Musk', col: 2, row: 1 },
    ];

    const getFlowerMotion = (col, row) => {
        const animationStart = 0.3;
        const animationEnd = 0.85;

        const yDistance = row === 0 ? 1050 : 650;
        const y = useTransform(smoothProgress, [animationStart, animationEnd], [0, yDistance]);

        const xBase = col === 0 ? 450 : col === 2 ? -450 : 0;
        const x = useTransform(smoothProgress, [animationStart, 0.9], [0, xBase]);

        const opacity = useTransform(smoothProgress, [animationStart, 0.9, 0.98], [1, 1, 0]);
        const scale = useTransform(smoothProgress, [animationStart, 0.9], [1, 0.4]);
        const rotate = useTransform(smoothProgress, [animationStart, animationEnd], [0, col === 0 ? 40 : col === 2 ? -40 : 20]);

        return { x, y, opacity, scale, rotate };
    };

    return (
        <section className="ingredients" ref={containerRef}>
            <motion.div
                className="ingredients-header"
                style={{ y: headerY, opacity: headerOpacity, scale: headerScale }}
            >
                <span className="section-subtitle">The Extraction</span>
                <h2 className="ingredients-title">Star Ingredients</h2>
            </motion.div>

            <div className="ingredients-grid">
                {flowers.map((flower) => {
                    const { x, y, opacity, scale, rotate } = getFlowerMotion(flower.col, flower.row);
                    return (
                        <div key={flower.id} className="grid-item">
                            <div className="ingredient-card">
                                <motion.img
                                    src={flower.src}
                                    alt={flower.name}
                                    className="flower-img"
                                    style={{ x, y, opacity, scale, rotate }}
                                />
                                <div className="ingredient-info">
                                    <span className="ingredient-name">{flower.name}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Ingredients;
