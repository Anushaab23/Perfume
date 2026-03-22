import React, { useState } from 'react';
import './Navbar.css';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navItems = ['Home', 'Shop', 'Collection', 'Blog', 'Contact'];

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            x: '100%',
            transition: { ease: 'easeInOut' }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <nav className="navbar">
            <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="menu-overlay"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="menu-items-container">
                            {navItems.map((item) => {
                                const isBlogLink = item === 'Blog';
                                const isContactLink = item === 'Contact';
                                const isCollectionLink = item === 'Collection';
                                
                                // Updated to handle specialized multi-page routing
                                const path = isBlogLink ? "/blog" : 
                                             isContactLink ? "/contact" : 
                                             isCollectionLink ? "/collection" : 
                                             item === 'Home' ? "/#home" : `/#${item.toLowerCase()}`;
                                
                                return (
                                    <Link 
                                        key={item} 
                                        to={path} 
                                        className="menu-item"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <motion.span 
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.1, x: 20 }}
                                        >
                                            {item}
                                        </motion.span>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
