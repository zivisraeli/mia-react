import React from 'react';

class HeaderImg extends React.Component {
  constructor() {
    super();

    this.state = {
      borderStyle: '',
    };
  }

  imgOnLoadEventHander = () => {
    this.setState({borderStyle: '1px solid black'});
  }

  render() {
    let theStyle = {border: this.state.borderStyle};
    let defaultImg='./images/mia-small-id02.jpg';

    return (
      <div id="dragged-into-div">                          
        <img src={defaultImg} id="header-img" 
                              className="header-img" 
                              alt="header-img"
                              style={theStyle}
                              onLoad={this.imgOnLoadEventHander}/>
      </div>);
  }
}

export default HeaderImg;