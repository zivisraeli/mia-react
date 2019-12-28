import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';
import AboutSection from './AboutSection';
import Fans from './Fans';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Router>
	      <header>
			    <div id="dragged-into-div">
			      <img src="images/mia-id02.jpg"  id="header-img" className="header-img" alt="header-img"/>
			    </div>
			    <nav id="navbar">
			      <Link to="/about"><span id="index">About</span></Link>
			      <Link to="/selfies"><span id="selfies">Selfies</span></Link>
			      <Link to="/fans"><span id="fans">Fan Club</span></Link>
			      <Link to="/kitbull"><span id="kitbull">Kitbull</span></Link>			      
			    </nav>
			  </header>

			  <Switch>
          <Route path="/about">
            <Footer />
          </Route> 
          <Route path="/selfies">
            <AboutSection />
          </Route>  
          <Route path="/fans">
            <Fans />
          </Route>        
        </Switch>
		  </Router>
    );
  }

}


export default MainMenu;