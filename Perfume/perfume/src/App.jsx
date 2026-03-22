import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Ingredients from './components/Ingredients/Ingredients';
import Scents from './components/Scents/Scents';
import Shop from './components/Shop/Shop';
import BlogPage from './components/Blog/BlogPage';
import ContactPage from './components/Contact/Contact';
import CollectionPage from './components/Collection/Collection';
import Product from './components/Product/Product';
import Lifestyle from './components/Lifestyle/Lifestyle';
import './App.css';

// The "Navigational Brain" that handles anchor jumps and page transitions
const ScrollToAnchor = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Reset to top for standalone sanctuaries
    if (hash === "" && pathname !== "/") {
      window.scrollTo(0, 0);
    }
    
    // Handle home-page anchor jumps
    if (pathname === '/') {
        if (hash) {
            setTimeout(() => {
              const targetID = hash.replace('#', '');
              const element = document.getElementById(targetID);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 150);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
  }, [hash, pathname]);

  return null;
};

// Home landing page — fully restored botanical immersive flow
const Home = () => (
  <div className="Home-Landing">
    <div id="home"><Hero /></div>
    <Ingredients />
    <div id="scents-section"><Scents /></div> {/* THE SCENT ASSEMBLY RESTORED */}
    <div id="shop"><Shop /></div>
    <Product />
    <Lifestyle />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
