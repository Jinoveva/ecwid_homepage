import React from "react";
import Lottie from "lottie-react";
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

            {/* Review Section */}
            <div className='review'>
                <p>This is the perfect place to get your business up and running. You</p>
                <p>literally don't have to go anywhere else. They have everything you need</p>
                <p>plus add on widgets, web syncing to social media, and more.</p>
                <p className='reviewerName'>Michelle Jackson</p>
            </div>

        </div>
    );
}

export default SellAnywhere;

