import React from 'react';

import { gridItemsData } from './gridItemsData';
import GridItem from './GridItem';

let loadedImgCounter = 0;

class SelfiesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: 'hidden',
      spinnerDisplay: 'block',
      gridItemsData: gridItemsData
    };

    this.gridItemImgLoadHandler = this.gridItemImgLoadHandler.bind(this);
  }

  // Invoked by the GridItem component upon image loading.
  // When loadedImgCounter === total number of images the div can become visible. 
  gridItemImgLoadHandler() {
    loadedImgCounter++;
    if (loadedImgCounter === gridItemsData.length) {
      this.setState({ visibility: 'visible' });
      this.setState({ spinnerDisplay: 'none' });
    }
  }

/*  sortGridItemsHandler = (sortByAttr, direction) => {
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
    console.log(gridItemsData[0]);
  }*/

  render() {
    let gridStyle = { visibility: this.state.visibility }
    let spinnerStyle = { display: this.state.spinnerDisplay }

    return (
      <section className="grid-section middle-section">
	      <div id="spinner-div" className="lds-ripple" style={spinnerStyle}>
	        <div></div>
	        <div></div>
	      </div>
        <div className="dynamic-grid" style={gridStyle}>
			    {gridItemsData.map((gridItemData) => {
			      return (<GridItem id={gridItemData.id}
			                        src={gridItemData.src}
			                        caption={gridItemData.caption}
			                        likeCount={gridItemData.likeCount}
			                        date={gridItemData.date} 
			                        imgLoadHandler={this.gridItemImgLoadHandler}
			                        key={gridItemData.id} />);
			    })}
        </div>
      </section>
    );
  }
}

export default SelfiesSection;