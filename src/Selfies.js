import React from 'react';

import SelfiesHeader from './SelfiesHeader';
import SelfiesSection from './SelfiesSection';
import Footer from './Footer';
import { sortGridItems } from './Utils.js';

class Selfies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOrderChanged: true
    }
  }

  sortChangeEventHandler = (event) => {
    let sortAttr = '';
    let sortDirection = '';
    let selectedIndex = event.target.selectedIndex;
    let selectedOptionId = event.target[selectedIndex].id;
    switch (selectedOptionId) {
      case 'likes+1':
        sortAttr = 'likes';
        sortDirection = 1;
        break;
      case 'likes-1':
        sortAttr = 'likes';
        sortDirection = 1;
        break;
      case 'captions+1':
        sortAttr = 'captions';
        sortDirection = 1;
        break;
      case 'captions-1':
        sortAttr = 'captions';
        sortDirection = -1;
        break;
      default:
        break;
    }

    sortGridItems(sortAttr, sortDirection);
  }

  // The change event on the dropdown element (select-sort) would 
  // bubble up to this parent component.
  // Upon getting this event the component would re-render itself.
  sortChangeEvent = (event) => {   
    if (event.target.id === 'select-sort') {
      this.sortChangeEventHandler(event);
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