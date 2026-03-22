import React, { useEffect } from 'react';
import './Collection.css';
import { motion } from 'framer-motion';

const Collection = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const boutique = [
        {
            id: 'no1',
            name: "Flora No. 01 — The Eternal Bloom",
            image: "/bottle.png",
            cap: "/cap.png", // Added Cap for the signature assembly
            notes: ["Bulgarian Rose", "Pink Pepper", "Vetiver"],
            desc: "The house signature. A timeless, architectural rose that unfolds across the day with unparalleled clarity."
        },
        {
            id: 'no2',
            name: "Flora No. 02 — The Distant Horizon",
            image: "/bottle2.png",
            notes: ["Bergamot", "Cedarwood", "Sea Salt"],
            desc: "A bracing, mineral-focused scent that captures the clean essence of the Mediterranean dawn."
        },
        {
            id: 'no3',
            name: "Flora No. 03 — The Midnight Signature",
            image: "/bottle3_fixed.png",
            notes: ["Black Agarwood", "Amber", "Smoky Tea"],
            desc: "Dark, sultry, and impossibly deep. A night-time potion for the most exclusive of encounters."
        }
    ];

    return (
        <div className="collection-sanctuary-page">
            <motion.header 
                className="collection-cinematic-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="collection-hero-overlay">
                    <span className="collection-eyebrow">The Heritage Range</span>
                    <h1 className="collection-main-title">The Collection</h1>
                    <div className="collection-mark">EST. 2024</div>
                </div>
            </motion.header>

            <section className="collection-triptych-grid">
                {boutique.map((fragrance, i) => (
                    <motion.article 
                        key={fragrance.id} 
                        className="collection-piece"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="piece-visual">
                            {/* Signature Assembly for No. 01 */}
                            {fragrance.id === 'no1' ? (
                                <div className="bottle-composite">
                                    <img src={fragrance.cap} alt="Cap" className="piece-cap" />
                                    <img src={fragrance.image} alt={fragrance.name} className="piece-img" />
                                </div>
                            ) : (
                                <img src={fragrance.image} alt={fragrance.name} className="piece-img" />
                            )}
                            <div className="piece-glow" />
                        </div>
                        <div className="piece-content">
                            <span className="piece-category">Atelier Blend</span>
                            <h2 className="piece-title">{fragrance.name}</h2>
                            <p className="piece-desc">{fragrance.desc}</p>
                            
                            <div className="piece-notes-row">
                                {fragrance.notes.map(note => (
                                    <span key={note} className="note-tag">{note}</span>
                                ))}
                            </div>
                            
                            <motion.button 
                                className="piece-action"
                                whileHover={{ letterSpacing: '8px', scale: 1.02 }}
                            >
                                Shop the scent →
                            </motion.button>
                        </div>
                    </motion.article>
                ))}
            </section>

            <footer className="collection-page-footer">
                <span className="footer-mark">FLORA — DISCREET LUXURY</span>
            </footer>
        </div>
    );
};

export default Collection;
