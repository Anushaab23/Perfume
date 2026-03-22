import React, { useEffect } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-one-page-sanctuary">
            <div className="floral-background-layer">
                <img src="/flower1.png" alt="Botanical Art" className="garden-visual" />
            </div>

            <div className="contact-content-wrapper">
                <motion.div
                    className="contact-left-panel"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="panel-header">
                        <span className="contact-subtitle">House of Flora</span>
                        <h1 className="contact-title">The Garden is Open.</h1>
                        <div className="atelier-crest">❀</div>
                    </div>

                    <div className="contact-details-minimal">
                        <div className="contact-item">
                            <h3>General Inquiries</h3>
                            <p className="contact-luxury-text">studio@florafragrance.com</p>
                        </div>
                        <div className="contact-item">
                            <h3>Press Relations</h3>
                            <p className="contact-luxury-text">press@houseofflora.com</p>
                        </div>
                        <div className="atelier-location">
                            <span className="loc-label">Bangalore, India</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-right-panel"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    <div className="contact-form-sanctuary">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Designation</label>
                                <input type="text" placeholder="Your Full Name" />
                            </div>
                            <div className="form-group">
                                <label>Electronic Mail</label>
                                <input type="email" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <label>Nature of Inquiry</label>
                                <select>
                                    <option>Bespoke Scent Request</option>
                                    <option>General Inquiry</option>
                                    <option>Press Portfolio</option>
                                </select>
                            </div>
                            <div className="form-group message-group">
                                <label>The Narrative</label>
                                <textarea rows="3" placeholder="Share your story..."></textarea>
                            </div>
                            <motion.button
                                className="contact-submit"
                                whileHover={{ letterSpacing: '8px', color: '#f5ebe0', borderColor: '#f5ebe0' }}
                            >
                                START THE BLOOM
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
