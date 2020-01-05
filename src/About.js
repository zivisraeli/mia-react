import React from 'react';

import AboutHeader from './AboutHeader';
import AboutSection from './AboutSection';
import Footer from './Footer';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <main>
          <AboutHeader />
          <AboutSection />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;