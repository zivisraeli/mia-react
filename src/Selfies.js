import React from 'react';

import SelfiesHeader from './SelfiesHeader';
import SelfiesSection from './SelfiesSection';
import Footer from './Footer';

class Selfies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <main id="grid-section" >
          <SelfiesHeader />
          <SelfiesSection />
        </main>
        <Footer />        
      </React.Fragment>
    );
  }
}

export default Selfies;