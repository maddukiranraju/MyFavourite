import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) =>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                        

    <div className="txt">
    <h1 style ={{fontWeight : "bold" }}>{props.name} <strong className="brand-name">F.R.I.E.N.D.S</strong></h1>
    <h2 className="my-3">
        I'll be there for you
        </h2>
        </div>
        <div className="mt-3">
            <NavLink to={props.link} className="btn-get-started">{props.btname}</NavLink>
        </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
            <div className = "img-hover-zoom--slowmo">
            <img src={props.img} className="img-fluid animated" alt="home"/>
            </div>
            </div>
    </div>
    </div>

</div>

</div>
    </section>
    
    </>
    );
};

export default Common;