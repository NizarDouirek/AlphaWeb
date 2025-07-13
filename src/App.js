import React, { useState, useEffect } from 'react';
import './App.css'; 
import Home from './pages/Home/home';
import Header from './composant/Header/header';
import Footer from './composant/Footer/footer';
import Contact from './pages/Contact/contact';
import Welcome from './pages/Welcome/welcome';
import About from './pages/About/about';
import Services from './pages/Service/service';
import PricingTable from './pages/Tablepricing/table';
import Loader from './composant/Loader/loader';
import Carousel from './composant/Carousel/carousel';

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
<link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      /> 
/**
 * App component serves as the main entry point for the application.
 * It currently renders the Contact component directly.
 * The commented-out code suggests a structure with a Router to manage different routes,
 * such as Home and Contact, with a Header and Footer wrapping the main content.
 */

// Ce wrapper permet d'utiliser useLocation proprement avec Router
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(() =>
    (location.pathname === '/' || location.pathname === '/Home') ? true : false
  );

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 800); // 0.8s loader
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>    
   
      {loading && <Loader />}
      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/table" element={<PricingTable />} />
            
            
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
