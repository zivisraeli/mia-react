import React from 'react';
import Footer from './Footer';
import SelfiesHeader from './SelfiesHeader';
import SelfiesSection from './SelfiesSection';
import './style.css';

class Selfies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <fragment>
        <main>
          <SelfiesHeader />
          <SelfiesSection />
        </main>
        <Footer />        
      </fragment>
    );
  }
}

export default Selfies;