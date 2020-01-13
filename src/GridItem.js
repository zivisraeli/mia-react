import React from 'react';

import { gridItemsData } from './gridItemsData';
import { getCookie, setCookie } from './Utils.js';
import heartOutline from './images/heart-outline.png';
import heartFull from './images/heart-full.png';

class GridItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: this.props.isLiked,
      likeCount: this.props.likeCount
    };
  }

  // =============================================================================
  // The method would:
  //   - toggle the isLiked value.
  //   - increment/decrement the likeCount.
  //   - set the states. during rendering the state values r used to determine 
  //     the proper icon and count number. 
  //   - update the likes cookie.
  // =============================================================================
  toggleLikeCount(gridItem) {
    if (gridItem.isLiked) {
      gridItem.isLiked = false;
      gridItem.likeCount--;
    } else {
      gridItem.isLiked = true;
      gridItem.likeCount++;
    }
    this.setState({
      isLiked: gridItem.isLiked,
      likeCount: gridItem.likeCount
    });

    updateLikesCookie();

    // =============================================================================
    // - get 'likes' cookie (a string-ed array)
    // - if not empty, JSON-parse it to convert the string to an array. 
    // - push or remove (filter) an element based on gridItem.isLiked value.
    // - JSON-stringify it to convert the array to a string. 
    // - set the cookie with the new string.
    // =============================================================================
    function updateLikesCookie() {
      let likeArray = [];
      let likeCookie = getCookie('likes');
      if (likeCookie != null) {
        likeArray = JSON.parse(likeCookie);
      }
      if (gridItem.isLiked) {
        likeArray.push(gridItem.id);
      } else {
        let filteredArray = likeArray.filter((id) => {
          return id !== gridItem.id;
        });
        likeArray = filteredArray;
      }

      likeCookie = JSON.stringify(likeArray);
      setCookie('likes', likeCookie);
    }
  }

  // =============================================================================
  // The heart image doesn't carry an id, but its parent does.
  // The id is used to find the actual grid-item element from the list.
  // Once the grid-item element if found, we can manipulate its data in toggleLikeCount()
  // =============================================================================
  heartClickEventHandler = (event) => {
    let itemId = event.target.parentElement.id;
    let gridItem = gridItemsData.find((gridItem) => {
      return gridItem.id === itemId;
    });
    this.toggleLikeCount(gridItem);
  }

  /*// =============================================================================
  // renderModalImgEvent would render the clicked img inside the modal div.
  // =============================================================================
  renderModalImg(gridItem) {
    // remove the 'small' portion of the src field value. 
    // i.e. "mia-small-id07.jpg" => "mia-id07.jpg"
    let arrSrc = gridItem.src.match('(.*mia-).*-(.*)(\.jpg$)');
    let modalImgSrc = arrSrc[1] + arrSrc[2] + arrSrc[3];

    // these 3 modal related elements are set with the data from this object. 
    state.modalImg.setAttribute("src", modalImgSrc);
    state.modalImgText.innerHTML = this.caption;
    state.modalImgLikeCount.innerHTML = `${this.likeCount}&nbsp<img src="images/heart-likes.png" class="heart-likes-icon"/>'s`;

    // Upon loading the img I need to get its "natural" size.
    // Since I place the modal-content-div 110px from the top it's not included in the vp Height. 
    // Yet, the max width of an image would be 75% of the vp. 
    state.modalImg.onload = function() {
      let imgW = state.modalImg.naturalWidth;
      let imgH = state.modalImg.naturalHeight;
      let vpW = document.documentElement.clientWidth;
      let vpH = document.documentElement.clientHeight - 110;
      let imgPropotion = imgW / imgH;
      let newW = imgPropotion * vpH;
      state.modalContentDiv.style.width = newW + "px";

      // Finally, display it. 
      state.modalCotainerDiv.style.display = "block";
    }
  }
*/
  // =============================================================================
  // invoked by navigation buttons to retrieve and render another image on the modal popup. 
  // priot to invoking the function, the state.modalImgIndex is set properly. 
  // =============================================================================
  /*renderModalImg = () => {
    let gridItem = state.gridItems[state.modalImgIndex];
    gridItem.renderModalImg();

    // So it won't bubble into window.onclick().
    event.stopPropagation();
  }*/

  /*imgClickEventHandler = (event) => {
  	let itemId = event.target.parentElement.id;
    let gridItem = gridItemsData.find((gridItem) => {
      return gridItem.id === itemId;
    });
    // state.modalImgIndex = state.gridMap.get(event.target.parentElement.id);
    this.renderModalImg(gridItem);
    //state.gridSection.classList.remove("un-blurred");
    //state.gridSection.classList.add("blurred");
  }
*/
  render() {
    let theHeart = heartOutline;
    let theHeartClass = 'heart';
    if (this.state.isLiked) {
      theHeart = heartFull;
      theHeartClass = 'heart animatedHeartBeat';
    }

    return (
      <figure id={this.props.id} className="grid-item">
         <img src={this.props.src} 
              className="grid-image"
              alt={this.props.id}
              onLoad={this.props.imgLoadCallbackEventHandler} 
              onClick={this.props.imgClickCallbackEventHandler} />
         <figcaption className="figcaption">
                     {this.props.caption}&nbsp;|&nbsp;
           <span id="like-count-span">{this.state.likeCount}</span>&nbsp;
           <img src={require("./images/heart-likes.png")} 
                className="heart-likes-icon" 
                alt="heart-likes"/>'s&nbsp;|&nbsp;
           {this.props.date}&nbsp;
         </figcaption>
         <img src={theHeart} 
              className={theHeartClass} 
              alt="heart-like" 
              onClick={this.heartClickEventHandler} />
       </figure>
    );
  }
}

export default GridItem;