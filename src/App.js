import React, { useState } from 'react';
import './App.css'; 
import Home from './pages/Home/home';
import Header from './composant/Header/header';
import Footer from './composant/Footer/footer';
function App() {
   return(
      <>
      {/* <Header/> */}
      <Home/>  
      <Footer/> 
      </>
   )
}

export default App;
