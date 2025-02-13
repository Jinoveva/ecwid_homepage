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
            <div className="containerRight">

                {/* First Row */}
                <div className="row firstRow">
                    <div className="col-12 col-md-6">
                        {/* This column can be empty or used for another element */}
                    </div>
                                        <div className="col-12 col-md-6">
                        <div className="storeSetupInfo">
                            <h1 className='thirdH1'>Grow faster</h1>
                            <p className='pText'>Ecwid gives you the power to easily sell anywhere, to anyone - across
                                the internet and around the world. Control everything from a single
                                platform with centralized inventory, order management, and pricing. It
                                doesn't get any simpler than this.
                            </p>
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
                        <p className='socials'>Get your products to the top of the world's most powerful search engine 
                            with Ecwid's automated Google Shopping ads</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h5 className='facebook2'>Facebook advertising</h5>
                        <p className='socials'>Create a Facebook campaign in minutes to reach up to two billion active facebook users.</p>
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
    <p className='reviewText'>Easy to use, affordable(and a free option if starting off). The platform
        <br/>
        intergration with other programmes, such as Facebook, Instagram and local
        <br/>
        payment options to make it an easy setup to manage effectively and easily.
    </p>

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