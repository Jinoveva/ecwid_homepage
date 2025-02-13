import React from "react";
import Lottie from "lottie-react";
import animationData from "./ManageSimply.json";
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ManageSimply.css';

function ManageSimply() {
    return(
        <div>


            {/* Container for consistent alignment */}
            <div className="containerLeft">

                {/* First Row */}
                <div className="row firstRow">
                    <div className="col-12 col-md-6">
                        <div className="storeSetupInfo">
                            <h1 className='fourthH1'>Manage simply</h1>
                            <p className='pText'>Control everything seamlessly from a single dashboard with centralized
                                inventory, order management, pricing, and more. Like a leisurely walk in
                                the park...if that park was also made on money.
                            </p>
                        </div>
                        <button className="learnMoreBtn3">Learn More &#8594;</button>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* This column can be empty or used for another element */}
                    </div>
                </div>

                {/* Second Row */}
                <div className="row secondRow">
                    <div className="col-12 col-md-3">
                        <h5 className='payments'>Fast and secure payments</h5>
                        <p className='socials'>Choose from Stripe and more than 50 other payment options to accept
                            credit card payments quickly and securely.
                        </p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h5 className='shipping'>Shipping that works for you</h5>
                        <p className='socials'>Choose as many shipping rates and carriers as you like to provide you and
                            your customers with the best experience.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* This column can be empty or used for another element */}
                    </div>
                </div>
            </div> {/* End of container */}
            
            <div className='manageSimplyLottie'>
                <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true} 
                className="lottie-animation"
                />
            </div>


            {/* Review Section */}
<div className="review3">
    <p className='reviewText'>Ecwid is awesome. Their smooth, operational and user friendly interface
    <br/>
    makes managing my store easy. They allow extensive and easy
    <br/>
    customization of products and variations galore.
    </p>

    {/* This section aligns stars and reviewer name in one row */}
    <div className="review-footer">
        <p className="reviewerName">Benjamin Scott</p>
        <div className="stars">
            <p><box-icon type="solid" name="star" className="reviewIcon" color='white'></box-icon>Trustpilot</p>
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="2">&#9733;</span>
            <span class="star" data-value="3">&#9733;</span>
            <span class="star" data-value="4">&#9733;</span>
            <span class="star" data-value="5">&#9733;</span>
        </div>
    </div>
</div>

</div>
    );
}

export default ManageSimply;
