import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <footer>
        <span>Disclaimer: This site is using cookies.</span>
        <span id="footer-divider">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span id="footer-copyright">COPYRIGHTS &copy; 2019 Mia Israeli All Rights Reserved.
          <img src="images/footer-paw.png" />
        </span>
      </footer>
    );
  }

}

export default Footer;