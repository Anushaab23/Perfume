import React, { useEffect } from 'react';
import './Blog.css';
import { motion } from 'framer-motion';

const BlogPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const chronicles = [
        {
            id: 1,
            title: "The Art of Eternal Distillation",
            image: "/blog1.png",
            subtitle: "Unveiling the alchemy of pure extraction.",
            content: `The distillation of a scent is more than a chemical process; it is a profound act of alchemy. It begins in the quiet dawn, where the petals are most saturated with their olfactory oils. In the heart of our laboratory, we use high-grade crystalline chambers to ensure the essence remains untainted by the machinery of mass production. 

            Each drop represents a story of the soil, the rainfall, and the careful hands that harvested it. In this longroad to brilliance, we prioritize quality over speed, capturing not just a smell, but the very spirit of the flower.`
        },
        {
            id: 2,
            title: "Sustainable Vessels: An Eco-Luxury Mission",
            image: "/bottle2.png",
            subtitle: "Preserving beauty through crystalline vessels.",
            content: `True luxury must be sustainable. Our mission to preserve the earth's beauty is reflected in our iconic glass vessels. Each bottle is designed as a keepsake—a high-end piece of crystalline art that is fully refillable and recylcable. 

            By partnering with ethical growers and minimizing our carbon footprint in shipping, we ensure that every breath of our fragrance is as pure as the planet from which it came.`
        },
        {
            id: 3,
            title: "The Signature Note",
            image: "/blog2.png",
            subtitle: "Defining your identity through olfactory storytelling.",
            content: `Elegance is not just seen; it is felt. The signature note is the foundation of identity, a personal narrative that follows you into every room. We believe in crafting fragrances that don't just mimic scent, but rather create a bespoke space for your spirit to reside.

            A guiding hand from the world's most renowned noses ensures our blends remain refined, timeless, and completely unforgettable.`
        }
    ];

    return (
        <div className="blog-page-sanctuary">
            <motion.header 
                className="blog-cinematic-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <img src="/last.jpeg" alt="Editorial Banner" className="blog-page-banner" />
                <div className="blog-hero-overlay">
                    <span className="editorial-label">March 2024 Edition</span>
                    <h1 className="blog-hero-title">The Scent Chronicles</h1>
                    <div className="editorial-divider" />
                    <p className="blog-hero-subtitle">Editorial Sanctuary of the House of Flora</p>
                </div>
            </motion.header>

            <section className="blog-chronicle-list">
                {chronicles.map((story, i) => (
                    <motion.article 
                        key={story.id} 
                        className="chronicle-entry"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: i * 0.1 }}
                        viewport={{ once: true, margin: "-15% 0px" }}
                    >
                        <div className="entry-visual">
                            <img src={story.image} alt={story.title} className="entry-img" />
                            <div className="entry-shimmer" />
                        </div>
                        <div className="entry-details">
                            <span className="entry-subtitle">{story.subtitle}</span>
                            <h2 className="entry-title">{story.title}</h2>
                            <div className="entry-body">
                                <p>{story.content}</p>
                            </div>
                            <motion.button 
                                className="entry-action"
                                whileHover={{ letterSpacing: '10px' }}
                            >
                                Inquire regarding the atelier →
                            </motion.button>
                        </div>
                    </motion.article>
                ))}
            </section>

            <footer className="blog-page-footer">
                <span className="footer-mark">FLORA — DISCREET LUXURY</span>
            </footer>
        </div>
    );
};

export default BlogPage;
