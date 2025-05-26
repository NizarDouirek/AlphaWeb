import React from "react";
import './home.css'
import Header from "../../composant/Header/header";
export default function Home(){
    return(
<>
        <div className="Ho">
            <Header/>
            <div className="main-h1">
                <h1>Delivering Superior Services<h1 style={{color:'blue',fontSize:'45px'}}>IT Solutions.</h1></h1>
            </div>
            <div>
                <button>Get Started</button>
            </div>
        </div>
        
        </>
        
        
    )
}