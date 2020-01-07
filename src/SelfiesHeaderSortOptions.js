import React from 'react';

import { getCookie, setCookie } from './Utils.js';

class SelfiesHeaderSortOptions extends React.Component {
  // =============================================================================
  // React's controlled element "select" allows setting the property "value" 
  // which would select the selected entry (option).
  // =============================================================================
  constructor(props) {
    super(props);

    let selectMap = {
      'likes+1': 'Like number; Asc.',
      'likes-1': 'Like number; Desc.',
      'captions+1': 'Caption; Asc.',
      'captions-1': 'Caption; Desc.',
    };

    this.state = {
      selectValue: 'likes-1',
      selectMap: selectMap
    };
  }

  // =============================================================================
  // Find the select option element pointed to by the cookie.
  // The cookie string is the same as the options' id. 
  // - read 'sort' cookie 
  // - set the selected option.
  // - invoke the call
  // =============================================================================
  readSortCookie = () => {
    let sortCookie = getCookie('sort');
    if (sortCookie === null) {
      sortCookie = this.state.selectValue; // default value
    }

    let sortArr = sortCookie.match('(.*)([-+]1)');
    let sortAttr = sortArr[1];
    let sortDirection = sortArr[2];

    this.setState({ selectValue: sortCookie });
    this.props.sortOptionsChangedCallback(sortAttr, sortDirection);
  }

  // =============================================================================
  // Invoked upon selection of a new sorting option. 
  // The method:
  // 1. determines the attr and direction
  // 2. set the cookie accordingly
  // 3. invokes the call back so the gird will get re-sorted.
  // =============================================================================
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
        sortDirection = -1;
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

    this.setState({ selectValue: selectedOptionId });
    this.props.sortOptionsChangedCallback(sortAttr, sortDirection);
  }

  // =============================================================================
  // readSortCookie should be invoked only once.
  // =============================================================================  
  componentDidMount() {
    this.readSortCookie();
  }

  render() {
    let m = this.state.selectMap;

    return (<div id="select-option-div" >
            <select id="select-sort" 
                    value={m[this.state.selectValue]} 
                    onChange={this.sortChangeEventHandler}>
              <option id="likes+1">{m['likes+1']}</option>
              <option id="likes-1">{m['likes-1']}</option>
              <option id="captions+1">{m['captions+1']}</option>
              <option id="captions-1">{m['captions-1']}</option>
            </select>
	         </div>);
  }
}

export default SelfiesHeaderSortOptions;