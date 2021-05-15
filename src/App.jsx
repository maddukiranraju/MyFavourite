import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Menu from "./Menu";

const App = () =>{
    return(
        <>
        <Menu/>
        <br/>
        <Switch>
            <Route exact path = '/' component={Home} />
            <Route path = '/about' component={About} />
            
            <Route path = '/contact' component={Contact} />
            <Redirect to='/'/>
        </Switch>
        </>
    );
};

export default App;