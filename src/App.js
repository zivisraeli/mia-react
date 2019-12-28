import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
import HeaderImg from './HeaderImg';
import About from './About';
import Selfies from './Selfies';
import Fans from './Fans';
import Kitbull from './Kitbull';
 
class App extends Component {
  render() {
    return (      
       <Router>
        <header>
          <HeaderImg />
          
          <nav id="navbar">
            <Link to="/about"><span id="index">About</span></Link>
            <Link to="/selfies"><span id="selfies">Selfies</span></Link>
            <Link to="/fans"><span id="fans">Fan Club</span></Link>
            <Link to="/kitbull"><span id="kitbull">Kitbull</span></Link>            
          </nav>
        </header>

        <Switch>
          <Route path="/" exact>
            <About />
          </Route> 
          <Route path="/about">
            <About />
          </Route> 
          <Route path="/selfies">
            <Selfies />
          </Route>  
          <Route path="/fans">
            <Fans />
          </Route> 
          <Route path="/kitbull">
            <Kitbull />
          </Route>         
        </Switch>
      </Router>
    );
  }
}
 
export default App;