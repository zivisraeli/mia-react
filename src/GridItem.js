import React from 'react';

import heartOutline from './images/heart-outline.png';

class GridItem extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
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
         <img src={heartOutline} 
              className="heart" 
              alt="heart-outline" />
       </figure>
    );
  }
}

export default GridItem;