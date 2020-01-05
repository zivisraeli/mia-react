import React from 'react';

import Footer from './Footer';
import FansHeader from './FansHeader';
import FansSection from './FansSection';

class Fans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <main>
          <FansHeader />
          <FansSection />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Fans;