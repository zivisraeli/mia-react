import React from 'react';
import Footer from './Footer';
import FansHeader from './FansHeader';
import FansSection from './FansSection';
import './style.css';

class Fans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <fragment>
        <main>
          <FansHeader />
          <FansSection />
        </main>
        <Footer />
      </fragment>
    );
  }
}

export default Fans;