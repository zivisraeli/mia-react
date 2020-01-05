import React from 'react';

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className='tc'>
        <input 
          className = 'pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          onChange={this.props.searchChangeHandler}/>
      </div>
    );
  }
}

export default SearchBox;