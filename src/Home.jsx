import React from "react";
import web from '../src/images/friends.jpg';
import Common from "./Common";
import Left from "./Left";
const Home = () =>{
    return(
        <>
        <Common 
        name="Welcome to the "
        btname="Get Started"
        img={web}
        link="/" />
        <br/>
        <br/>
        <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h2 style={{padding:"6px 0 2px 0", marginBottom:"500px"}}>Get started from here <br/> <span style={{color:"tomato"}}> Scroll down to see the images </span></h2>
        </div>
        </div>
        </div>
        </div>
        </div>
        <Left/>
    </>
    );
};

export default Home;