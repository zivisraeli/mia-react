import React from 'react';

import { sortGridItems, getCookie, setCookie } from './Utils.js';

class SelfiesHeaderSortOptions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visibility: 'hidden'
    };
  }

  componentDidMount() {
    this.readSortCookie();
  }

  // =============================================================================
  // readSortCookie would:
  // - read 'sort' cookie 
  // - set the selected option.
  // - make the select-option-div visible (to avoid jitter).
  // - sort the grid items array.
  // =============================================================================
  readSortCookie = () => {
    // set default values in case there is no cookie yet.
    let sortAttr = 'likes';
    let sortDirection = -1;
    let sortCookie = getCookie('sort');
    if (sortCookie === null) {
      sortCookie = "likes-1";
    } else {
      let sortArr = sortCookie.match('(.*)([-+]1)');
      sortAttr = sortArr[1];
      sortDirection = sortArr[2];
    }

    // Find the select option element pointed to by the cookie and add 'selected' attribute.
    // The options carry the same id as the cookie.
    let selectedOption = document.getElementById(sortCookie);
    selectedOption.setAttribute("selected", "selected");
    this.setState({ visibility: 'visible' });

    sortGridItems(sortAttr, sortDirection);
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

    setCookie('sort', selectedOptionId);
  }

  render() {
    let theStyle = { visibility: this.state.visibility }

    return (<div id="select-option-div" style={theStyle}>
            <select id="select-sort" onChange={this.sortChangeEventHandler}>
              <option id="likes+1">Like number; Asc.</option>
              <option id="likes-1">Like number; Desc.</option>
              <option id="captions+1">Caption; Asc.</option>
              <option id="captions-1">Caption; Desc.</option>
            </select>
	         </div>);
  }
}

export default SelfiesHeaderSortOptions;