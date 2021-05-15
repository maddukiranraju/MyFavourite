import React from 'react';
import Fade from 'react-reveal/Fade';
import img from "../src/images/friends1.jpg";
import img2 from "../src/images/friends2.jpg";

class Left extends React.Component {
  render() {
    return (
      <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
      <div>
        <Fade left>
          <img src={img}/>
        </Fade>
        <Fade right>
          <img src={img2} width="800px" height="1000px"/>
        </Fade>
        
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    );
  }
}

export default Left;