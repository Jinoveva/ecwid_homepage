import React from "react";
import Lottie from "lottie-react";
import animationData from "./SellAnywhere.json";
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SellAnywhere.css';

function SellAnywhere() {
    return(
        <div>


            {/* Container for consistent alignment */}
            <div className="container">

                {/* First Row */}
                <div className="row firstRow">
                    <div className="col-12 col-md-6">
                        <div className="storeSetupInfo">
                            <h1 className='secondH1'>Sell anywhere</h1>
                            <p>Set up your Ecwid store once to easily sync and sell across a website,</p>
                            <p>social media, market places like Amazon, and live in-person. Get started</p>
                            <p>with one, or try them all.</p>
                        </div>
                        <button className="learnMoreBtn">Learn More</button>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* This column can be empty or used for another element */}
                    </div>
                </div>

                {/* Second Row */}
                <div className="row secondRow">
                    <div className="col-12 col-md-3">
                        <h5 className='facebook'><box-icon type='logo' name='facebook'></box-icon></h5>
                        <p>Set up and manage a Facebook Store</p>
                        <p>right from your Ecwid dashboard.</p>
                        <p>You're ready for social selling.</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h5 className='instagram'><box-icon name='instagram' type='logo' ></box-icon></h5>
                        <p>Let customers order directly from your</p>
                        <p>Instagram posts when you're powered</p>
                        <p>by Ecwid.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* This column can be empty or used for another element */}
                    </div>
                </div>
            </div> {/* End of container */}
            
            <div className='sellAnywhereLottie'>
                <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true} 
                className="lottie-animation"
                />
            </div>


            {/* Review Section */}
      <div className="review">
    <p>This is the perfect place to get your business up and running. You</p>
    <p>literally don't have to go anywhere else. They have everything you need</p>
    <p>plus add on widgets, web syncing to social media, and more.</p>

    {/* This section aligns stars and reviewer name in one row */}
    <div className="review-footer">
        <p className="reviewerName">Michelle Jackson</p>
        <div className="stars">
            <p><box-icon type="solid" name="star" class="reviewIcon"></box-icon>Trustpilot</p>
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

export default SellAnywhere;

