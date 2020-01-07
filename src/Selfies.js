import React from 'react';

import SelfiesHeader from './SelfiesHeader';
import SelfiesSection from './SelfiesSection';
import Footer from './Footer';
import { gridItemsData } from './gridItemsData';

class Selfies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortAttr: '',
      sortDirection: 0
    }

    this.sortOptionsChangedCallback = this.sortOptionsChangedCallback.bind(this);
  }

  // =============================================================================
  // This function takes 2 parameters, compare them and return true or false.
  // Javascript sort function take a "compare" function as a parameter. 
  // Since gridItemsData is imported, Javascript would allow to change it.
  // An imported symbol is akin to having a const symbol. 
  // =============================================================================
  sortGridItems = (sortByAttr, direction) => {
    let sortedGridItems = gridItemsData.sort((item1, item2) => {
      let retVal = 0;
      if (sortByAttr === "captions") {
        retVal = item1.caption.toUpperCase() > item2.caption.toUpperCase() ? 1 : -1;
      } else {
        retVal = item1.likeCount > item2.likeCount ? 1 : -1
      }
      return retVal * direction;
    });

    sortedGridItems.forEach((gridItem, index) => {
      gridItemsData[index] = gridItem;
    });
  }

  // =============================================================================
  // Selfies component provides the sortOptionsChangedCallback method to its children so 
  // upon changing the sort option (in the SelfiesHeaderSortOptions), this component is notifed.
  // Alternatively, I could've made the component listens to onChange event (that will bubble 
  // up from the SelfiesHeaderSortOptions), however, the sort option can change not 
  // necessarily as a result of an event; initally it is changed based on the cookie value. 
  // =============================================================================
  sortOptionsChangedCallback = (sortAttr, sortDirection) => {
    this.sortGridItems(sortAttr, sortDirection);
    this.setState({ sortAttr: sortAttr, sortDirection: sortDirection });
  }

  render() {
    return (
      <React.Fragment>
        <main id="grid-section">
          <SelfiesHeader sortOptionsChangedCallback={this.sortOptionsChangedCallback}/>
          <SelfiesSection />
        </main>
        <Footer />        
      </React.Fragment>
    );
  }
}

export default Selfies;