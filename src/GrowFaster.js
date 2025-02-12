import React from "react";
import Lottie from "lottie-react";
import animationData from "./GrowFaster.json";
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrowFaster.css';

function GrowFaster() {
    return(
        <div>


            {/* Container for consistent alignment */}
            <div className="container">

                {/* First Row */}
                <div className="row firstRow">
                    <div className="col-12 col-md-6">
                        {/* This column can be empty or used for another element */}
                    </div>
                                        <div className="col-12 col-md-6">
                        <div className="storeSetupInfo">
                            <h1 className='thirdH1'>Grow faster</h1>
                            <p>Ecwid gives you the power to easily sell anywhere, to anyone - across</p>
                            <p>the internet and around the world. Control everything from a single</p>
                            <p>platform with centralized inventory, order management, and pricing. It</p>
                            <p>doesn't get any simple than this.</p>
                        </div>
                        <button className="learnMoreBtn2">Learn More &#8594;</button>
                    </div>
                </div>

                {/* Second Row */}
                <div className="row secondRow">
                    <div className="col-12 col-md-6">
                        {/* This column can be empty or used for another element */}
                    </div>
                    <div className="col-12 col-md-3">
                        <h5 className='google'>Google advertising</h5>
                        <p>Get your products ti the top of the</p>
                        <p>world's most powerful search engine</p>
                        <p>with Ecwid's automated Google</p>
                        <p>Shopping ads</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h5 className='facebook2'>Facebook advertising</h5>
                        <p>Create a Facebook campaign in</p>
                        <p>minutes to reach up to two billion</p>
                        <p>active facebook users.</p>
                    </div>
                </div>
            </div> {/* End of container */}
            
            <div className='growFasterLottie'>
                <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true} 
                className="lottie-animation"
                />
            </div>


            {/* Review Section */}
      <div className="review2">
    <p>Easy to use, affordable(and a free option if starting off). The platform</p>
    <p>intergration with other programmes, such as Facebook, Instagram and local</p>
    <p>payment options to make it an easy setup to manage effectively and easily.</p>

    {/* This section aligns stars and reviewer name in one row */}
    <div className="review-footer2">
        <div className="stars">
            <p><box-icon type="solid" name="star" className="reviewIcon"></box-icon>Trustpilot</p>
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="2">&#9733;</span>
            <span class="star" data-value="3">&#9733;</span>
            <span class="star" data-value="4">&#9733;</span>
            <span class="star" data-value="5">&#9733;</span>
        </div>
        <p className="reviewerName">Pamela Strydom</p>
    </div>
</div>


</div>
    );
}

export default GrowFaster;