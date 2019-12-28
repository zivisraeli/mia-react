import React from 'react';
import MainMenu from './MainMenu';
import AboutHeader from './AboutHeader';
import AboutSection from './AboutSection';
import Footer from './Footer';
import './style.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <fragment>
        <main>
          <AboutHeader />
          <AboutSection />
        </main>
        <Footer />
      </fragment>
    );
  }
}

export default About;