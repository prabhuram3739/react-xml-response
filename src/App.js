import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './header/Header';
import Searchview from './searchView/Searchview';
import Footer from './footer/Footer';
import Home from './home/Home';
import Index from './index/Index';
import Login from './login/Login';

function App() {
    return ( 
    <div className = "app" >
        <Router>
        <Header />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
        <Route path="/index">
            <Index />
          </Route>
          <Route path="/search">
            <Searchview />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    </div >
    );
}

export default App;