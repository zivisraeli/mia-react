import React from 'react';

import KitbullVideo from './KitbullVideo';
import KitbullSection from './KitbullSection';
import Footer from './Footer';

class Kitbull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>  
        <main>
          <KitbullVideo />
          <KitbullSection />
        </main>
        <Footer />
      </React.Fragment>  
    );
  }
}

export default Kitbull;