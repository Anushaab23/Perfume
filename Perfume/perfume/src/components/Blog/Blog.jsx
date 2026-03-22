import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
    const articles = [
        {
            id: 1,
            title: "The Art of Distillation",
            excerpt: "Unveiling the delicate process of capturing the purest essences from nature's most rare botanicals.",
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
            date: "Editorial — March 2024"
        },
        {
            id: 2,
            title: "Sustainable Fragrance",
            excerpt: "Our journey toward circular beauty, from ethical petal sourcing to our refillable crystalline vessels.",
            image: "https://images.unsplash.com/photo-1615485290382-78be1a28cb20?auto=format&fit=crop&q=80&w=800",
            date: "Chronicle — Feb 2024"
        },
        {
            id: 3,
            title: "The Signature Note",
            excerpt: "Finding your olfactory identity in a world of fleeting trends. A guide to timeless elegance.",
            image: "/last.jpeg",
            date: "Masterclass — Jan 2024"
        }
    ];

    return (
        <section className="blog-section" id="blog">
            <div className="blog-container">
                <motion.div
                    className="blog-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="blog-subtitle">The Chronicles</span>
                    <h2 className="blog-title">Editorial Stories</h2>
                </motion.div>

                <div className="blog-grid">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="blog-image-wrapper">
                                <img src={article.image} alt={article.title} className="blog-image" />
                                <div className="blog-overlay" />
                            </div>
                            <div className="blog-content">
                                <p className="blog-date">{article.date}</p>
                                <h3 className="blog-article-title">{article.title}</h3>
                                <p className="blog-excerpt">{article.excerpt}</p>
                                <Link to="/blog" className="blog-read-more-link">
                                    <motion.button
                                        className="blog-read-more"
                                        whileHover={{ gap: '15px' }}
                                    >
                                        Read Story <span className="arrow">→</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
