import React from "react";
import Cast from "./Cast";


const Contact = () =>{
    return(
    <>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>
 <div class="container">
    <div class="row">
        <div class="col-lg-4 wow zoomIn" data-wow-duration="1s">
            <div class="card mb-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/JenniferAnistonHWoFFeb2012.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Jennifer Aniston</h5>
                    <p class="card-text">
                    Jennifer Joanna Aniston (born February 11, 1969) is an American actress, producer, and businesswoman. Her role name is "Rachel Green"
                    </p>
                </div>
            </div>
        </div>
    
        <div class="col-lg-4 wow zoomIn" data-wow-duration="2s">
            <div class="card mb-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Courteney_Cox_1995.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Courteney Cox</h5>
                    <p class="card-text">
                    Courteney Bass Cox (previously Cox Arquette; born June 15, 1964) is an American actress, producer, and director. Her role name is "Monica Geller"
                    </p>
                </div>
            </div>
        </div>
    
        <div class="col-lg-4 wow zoomIn" data-wow-duration="3s">
            <div class="card mb-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Lisa_Kudrow_at_TIFF_2009.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Lisa Kudrow</h5>
                    <p class="card-text">
                    Lisa Valerie Kudrow[1] ( born July 30, 1963)[2] is an American actress, comedian, writer, and producer. Her role name is "Phoebe buffay"
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
    <div class="col-lg-4 wow zoomIn" data-wow-duration="4s">
            <div class="card mb-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/X_217c5312.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Matt LeBlanc</h5>
                    <p class="card-text">
                    Matthew Steven LeBlanc ( born July 25, 1967) is an American actor and comedian. His role name is "Joey Tribbiani"
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 wow zoomIn" data-wow-duration="5s">
            <div class="card mb-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Matthew_Perry_2013.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Matthew Perry</h5>
                    <p class="card-text">
                    Matthew Langford Perry (born August 19, 1969) is a Canadian American actor, comedian, executive producer, screenwriter, and playwright. His role name is "Chandler Bing"
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 wow zoomIn" data-wow-duration="6s">
            <div class="card mb-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/David_Schwimmer_2011.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">David Schwimmer</h5>
                    <p class="card-text">
                    David Lawrence Schwimmer (born November 2, 1966) is an American actor, comedian, director and producer. Her role name is "Ross Geller"
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
    );
};

export default Contact;