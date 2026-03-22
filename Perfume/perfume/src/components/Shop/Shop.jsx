import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useMotionValueEvent } from 'framer-motion';
import './Shop.css';

const Shop = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.4 });
    const [textVisible, setTextVisible] = useState(true);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["0.4 start", "0.8 start"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Completely disappear once we scroll down past the threshold
        if (latest > 0.8) {
            setTextVisible(false);
        } else {
            setTextVisible(true);
        }
    });

    const particles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 4
    }));

    const springConfig = { type: 'spring', stiffness: 45, damping: 18 };

    return (
        <section className={`shop-section ${isInView ? 'in-view' : ''}`} id="shop" ref={sectionRef}>
            <div className="shop-studio-gradient" />
            <div className="shop-shimmer-overlay" />

            <div className="shop-panel p1" />
            <div className="shop-panel p2" />

            <div className="shop-marble-floor">
                <div className="floor-grid" />
            </div>

            <div className="shop-dust-container">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="shop-dust-particle"
                        style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
                        animate={{ y: [0, -100, 0], opacity: [0, 0.6, 0] }}
                        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </div>

            <div className="shop-main-spotlight" />
            <div className="shop-floor-light" />

            <div className="shop-content-layer">
                <div className="shop-bottles-row">
                    {/* Bottle 2 - Left Arrival */}
                    <motion.div
                        className="shop-bottle-item side-item"
                        initial={{ x: -800, opacity: 0, rotate: -10 }}
                        animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : { x: -800, opacity: 0, rotate: -10 }}
                        transition={{ ...springConfig, delay: 0.2 }}
                    >
                        <img src="/bottle2.png" alt="Flora No. 02" className="shop-bottle-img" />
                        <motion.div style={{ display: textVisible ? 'block' : 'none' }}>
                            <motion.div
                                className="shop-bottle-info"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.8 }}
                            >
                                <h3 className="shop-bottle-name">The Distant Horizon</h3>
                                <p className="shop-bottle-no">Flora No. 02</p>
                                <p className="shop-bottle-price">₹9,200</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Flora No. 01 - Text only (floating bottle is the image) */}
                    <motion.div
                        className="shop-bottle-item main-item"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="shop-bottle-spacer" />
                        <motion.div style={{ display: textVisible ? 'block' : 'none' }}>
                            <motion.div
                                className="shop-bottle-info"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 1.0 }}
                            >
                                <h3 className="shop-bottle-name">The Eternal Bloom</h3>
                                <p className="shop-bottle-no">Flora No. 01</p>
                                <p className="shop-bottle-price">₹12,900</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Bottle 3 - Right Arrival */}
                    <motion.div
                        className="shop-bottle-item side-item"
                        initial={{ x: 800, opacity: 0, rotate: 10 }}
                        animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : { x: 800, opacity: 0, rotate: 10 }}
                        transition={{ ...springConfig, delay: 0.4 }}
                    >
                        <img src="/bottle3_fixed.png" alt="Flora No. 03" className="shop-bottle-img" />
                        <motion.div style={{ display: textVisible ? 'block' : 'none' }}>
                            <motion.div
                                className="shop-bottle-info"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 1.2 }}
                            >
                                <h3 className="shop-bottle-name">The Midnight Signature</h3>
                                <p className="shop-bottle-no">Flora No. 03</p>
                                <p className="shop-bottle-price">₹11,500</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
