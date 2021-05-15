import React from "react";
import web from '../src/images/about.png';
import Common from "./Common";
const Home = () =>{
    return(
        <>
        <Common 
        name="This is about page of "
        btname="Cast"
        img={web} 
        link="/contact"/>
        <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <div className="txt">
                            <h1 style={{fontWeight:"bold"}}>About</h1>
                            </div>
                            <h3>
                            Friends is an American television sitcom, created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons.[1] With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City. The series was produced by Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive producers were Kevin S. Bright, Kauffman, and Crane.
                            </h3>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
    </>
    );
};

export default Home;