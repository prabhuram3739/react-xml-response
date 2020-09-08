import React from "react";
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Footer from './footer/Footer';

function App() {
    return ( 
    <div className = "app" >
        <Header />
        <Home />
        <Footer />
    </div >
    );
}

export default App;