import React from "react";
import Lottie from "lottie-react";
import animationData from "./FinalPageLottie.json";
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FinalPage.css';

function FinalPage() {
    return (
        <div className='final-page-body'>
            <div className='row finalRow'>
                <div className='col-12 col-md-6'>
                    <p className='finalP'>Your free online store is just a few clicks away</p>
                </div>
                <div className='col-12 col-md-6'>
                    <button className="learnMoreBtn4">Get started for free &#8594;</button>
                    <p className='noCredit'>No credit card required</p>
                    {/* Uncomment to enable animation */}
                    {/* <div className='finalPageLottie'>
                        <Lottie 
                        animationData={animationData} 
                        loop={true} 
                        autoplay={true} 
                        className="lottie-animation-final"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default FinalPage;
