import React, { Component } from 'react';

import headerImg from './images/mia-small-id02.jpg';

class HeaderImg extends Component {
  componentDidMount() {
    let headerImgElem = document.querySelector("header img");
    headerImgElem.onload = function() {
      headerImgElem.style.border = "1px solid black";
    }
  }

  render() {
    return (<div id="dragged-into-div">
              <img src={headerImg}  id="header-img" className="header-img" alt="header-img"/>
            </div>);
  }
}

export default HeaderImg;