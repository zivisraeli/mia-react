import React from 'react';
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

import './style.css';
import './spinner.css';
 
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMenuEntry : 'about',
    }
  }

  menuClickEventHandler = (event) => {
    this.setState({currentMenuEntry: event.target.id});
  }

  // =============================================================================
  // Based on the URL pathname I can determine the selected menu entry.
  // This entry is styled a bit differently.
  // =============================================================================
  render() {
    let entry = window.location.pathname;
    let currentMenuEntryStyle = {textShadow: 'gray 1px 1px 4px'};

    return (      
       <Router>
        <header>
          <HeaderImg />
          
          <nav id="navbar">
            <Link to="/about" onClick={this.menuClickEventHandler} 
                              style={entry.match('about') ? currentMenuEntryStyle : {}}>
                              <span id="index">About</span>
            </Link>
            <Link to="/selfies" onClick={this.menuClickEventHandler}
                                style={entry.match('selfies') ? currentMenuEntryStyle : {}}>
                                <span id="selfies">Selfies</span>
            </Link>
            <Link to="/fans" onClick={this.menuClickEventHandler}
                             style={entry.match('fans') ? currentMenuEntryStyle : {}}>
                             <span id="fans">Fan Club</span>
            </Link>
            <Link to="/kitbull" onClick={this.menuClickEventHandler}
                                style={entry.match('kitbull') ? currentMenuEntryStyle : {}}>
                                <span id="kitbull">Kitbull</span>
            </Link>            
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