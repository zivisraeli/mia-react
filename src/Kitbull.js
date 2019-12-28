import React from 'react';
import Footer from './Footer';
import KitbullVideo from './KitbullVideo';
import KitbullSection from './KitbullSection';
import './style.css';

class Kitbull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <fragment>
        <main>
          <KitbullVideo />
          <KitbullSection />
        </main>
        <Footer />
      </fragment>
    );
  }
}

export default Kitbull;