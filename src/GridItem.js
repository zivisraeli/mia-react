import React from 'react';

import heartOutline from './images/heart-outline.png';
import heartFull from './images/heart-full.png';

class GridItem extends React.Component {

  render() {
  	let theHeart = heartOutline;
  	if (this.props.isLiked) {
      theHeart = heartFull;
  	}

    return (
      <figure id={this.props.id} className="grid-item">
         <img src={this.props.src} 
              className="grid-image"
              alt={this.props.id}
              onLoad={this.props.imgLoadHandler} />
         <figcaption className="figcaption">
                     {this.props.caption}&nbsp;|&nbsp;
           <span id="like-count-span">{this.props.likeCount}</span>&nbsp;
           <img src={require("./images/heart-likes.png")} 
                className="heart-likes-icon" 
                alt="heart-likes"/>'s&nbsp;|&nbsp;
           {this.props.date}&nbsp;
         </figcaption>
         <img src={theHeart} 
              className="heart" 
              alt="heart-like" />
       </figure>
    );
  }
}

export default GridItem;