import React from "react";



const Cast = (props) =>{
    return(
    <>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>
    <div className="row">
        <div className="col-lg-4 wow zoomIn" data-wow-duration={props.time}>
            <div className="card mb-5">
                <img src={props.pic} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                    {props.desc}
                    </p>
                </div>
            </div>
        </div>
        </div>

    </>
    );
};

export default Cast;