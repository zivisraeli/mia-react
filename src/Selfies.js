import React from 'react';

import SelfiesHeader from './SelfiesHeader';
import SelfiesSection from './SelfiesSection';
import Footer from './Footer';

class Selfies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOrderChanged: true
    }
  }

  // The change event on the dropdown element (select-sort) would 
  // bubble up to this parent component.
  // Upon getting this event the component would re-render itself.
  sortChangeEvent = (event) => {   
    if (event.target.id === 'select-sort') {
      this.setState({sortOrderChanged: true});
    }
  }

  render() {
    return (
      <React.Fragment>
        <main id="grid-section" onChange={this.sortChangeEvent}>
          <SelfiesHeader />
          <SelfiesSection />
        </main>
        <Footer />        
      </React.Fragment>
    );
  }
}

export default Selfies;