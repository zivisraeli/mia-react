import React from 'react';

class KitbullVideo extends React.Component {
  render() {
    return (
      <fragment>
		      <h1>Kitbull / Pixar</h1> 
		      <div id = "iframe-wrapper" >
			      <iframe src="https://www.youtube.com/embed/AZS5cgybKcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
			      </iframe> 
		      </div>
    		</fragment>
    );
  }
}

export default KitbullVideo;