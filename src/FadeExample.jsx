import React from 'react';
import Fade from 'react-reveal/Fade';
import img from "../src/images/Untitled.jpg"
class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade right distance="50%">
          <img src={img}/>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;