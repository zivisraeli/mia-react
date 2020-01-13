import React from 'react';

import { gridItemsData } from './gridItemsData';
import { gridItemsMap } from './Selfies';

let modalImgIndex = 0;

class SelfiesModalImg extends React.Component {
  constructor(props) {
    super(props);
    console.log('SelfiesModalImg construcor has been invoked');
    this.state = {
      modalImgId: this.props.modalImgId
    };
  }

  onLoadEventHandler() {

  }

  // =============================================================================
  // renderModalImgEvent would render the clicked img inside the modal div.
  // =============================================================================
  renderModalImg(gridItem) {
    /* // remove the 'small' portion of the src field value. 
     // i.e. "mia-small-id07.jpg" => "mia-id07.jpg"
     let arrSrc = gridItem.src.match('(.*mia-).*-(.*)(\.jpg$)');
     let modalImgSrc = arrSrc[1] + arrSrc[2] + arrSrc[3];

     // these 3 modal related elements are set with the data from this object. 
     this.setState({src: modalImgSrc});
     this.setState({caption: gridItem.caption});
     this.setState({likeCount: gridItem.likeCount});*/
    /*
    //state.modalImg.setAttribute("src", modalImgSrc);
    state.modalImgText.innerHTML = this.caption;
    state.modalImgLikeCount.innerHTML = `${this.likeCount}&nbsp<img src="images/heart-likes.png" class="heart-likes-icon"/>'s`;
*/
    // Upon loading the img I need to get its "natural" size.
    // Since I place the modal-content-div 110px from the top it's not included in the vp Height. 
    // Yet, the max width of an image would be 75% of the vp. 
    /*state.modalImg.onload = function() {
      let imgW = state.modalImg.naturalWidth;
      let imgH = state.modalImg.naturalHeight;
      let vpW = document.documentElement.clientWidth;
      let vpH = document.documentElement.clientHeight - 110;
      let imgPropotion = imgW / imgH;
      let newW = imgPropotion * vpH;
      state.modalContentDiv.style.width = newW + "px";

      // Finally, display it. 
      state.modalCotainerDiv.style.display = "block";
    }*/
  }

  prevBtnEventHandler = () => {
    modalImgIndex = modalImgIndex === 0 ? gridItemsData.length - 1 : modalImgIndex - 1;
    let modalImgId = gridItemsData[modalImgIndex].id;
    this.setState({ modalImgId: modalImgId });
  }

  nextBtnEventHandler = () => {
    modalImgIndex = (modalImgIndex + 1) === gridItemsData.length ? 0 : modalImgIndex + 1;
    let modalImgId = gridItemsData[modalImgIndex].id;
    this.setState({ modalImgId: modalImgId });
  }

  closeBtnEventHandler = () => {
  	this.props.modalClosedCallbackEventHandler();
  }

  render() {
    let theModalImg = {
      displayStyle: this.state.modalImgId === '' ? 'none' : 'block'
    };

    if (this.state.modalImgId !== '') {
      modalImgIndex = gridItemsMap.get(this.state.modalImgId);
      let gridItem = gridItemsData[modalImgIndex];

      let arrSrc = gridItem.src.match('(.*mia-).*-(.*)(.jpg$)');
      theModalImg.src = arrSrc[1] + arrSrc[2] + arrSrc[3];
      theModalImg.caption = gridItem.caption;
      theModalImg.likeCount = gridItem.likeCount;
    }

    return (
      <div id="modal-container-div" style={{display: theModalImg.displayStyle}}>
		    <div id="modal-content-div" style={{overflow: 'auto', height: 300}}>
		      <span className="modal-img-close-btn" onClick={this.closeBtnEventHandler}>&times;</span>
		      <div id="modal-img-div">
		        <img src={theModalImg.src} 
		             alt="Mia's i-m-g"		             
		             onLoad={this.onLoadEventHandler}/>
		        <span id="modal-img-text" className="modal-img-caption">{theModalImg.caption}</span>
		        <span id="modal-img-like-count" className="modal-img-caption">{theModalImg.likeCount}</span>
		      </div>
		    </div>
		    <button id="prev-btn" 
		            className="nav-button"
		            onClick={this.prevBtnEventHandler}>
		      <i className="fa fa-arrow-circle-left"></i>
		      <span className="button-text">&nbsp;&nbsp;Previous</span>
		    </button>
		    <button id="next-btn" 
		            className="nav-button" 
		            onClick={this.nextBtnEventHandler}>
		      <span className="button-text">Next&nbsp;&nbsp;</span>
		      <i className="fa fa-arrow-circle-right"></i>
		    </button>
		  </div>
    )
  }
}

export default SelfiesModalImg;