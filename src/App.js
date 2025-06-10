import React, { useState } from 'react';
import './App.css'; 
import Home from './pages/Home/home';
import Header from './composant/Header/header';
import Footer from './composant/Footer/footer';
import Contact from './pages/Contact/contact';
import About from './pages/About/about';
import Services from './pages/Service/service';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/**
 * App component serves as the main entry point for the application.
 * It currently renders the Contact component directly.
 * The commented-out code suggests a structure with a Router to manage different routes,
 * such as Home and Contact, with a Header and Footer wrapping the main content.
 */

function App() {
   return(
      <>
      {/*<Home/>  */}
     {/* <Footer/> */}
     {/* <Contact/>*/}
      <Router>
          <Header/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
         </Routes>
         <Footer />
      </Router>

      </>
   )
}

export default App;
