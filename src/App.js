import React, { useState } from 'react';
import './App.css'; 
import Home from './pages/Home/home';
import Header from './composant/Header/header';
import Footer from './composant/Footer/footer';
import Contact from './pages/Contact/contact'
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
      {/* <Header/> */}
      {/*<Home/>  */}
     {/* <Footer/> */}
     {/* <Contact/>*/}
      <Router>
         
         <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
         <Footer />
      </Router>

      </>
   )
}

export default App;
