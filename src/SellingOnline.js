import React from "react";
import Lottie from "lottie-react";
import animationData from "./mainScene.json";
import 'boxicons';
import "./SellingOnline.css";

function SellingOnline() {
    return (
        <div className="selling-container">
            <h1 className='firstH1'>Start selling online for free</h1>
            <p className="trialOffer">
                We're putting free trials on trial. With Ecwid, you get free forever. Set up
                <br />
                your free account once, and keep it as long as you like. Seriously!
            </p>

            <button className="getStartedBtn">Get started for free &#8594;</button>
            <p className="noCredit">No credit card required</p>

              {/* Lottie Animation */}
             <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true} 
                className="sellingOnlineLottie"
            />

            <div className="awards-container">
                <div className="award">
                <p> <box-icon name='right-top-arrow-circle'></box-icon> Capterra</p>
                <p>Best ease of use</p>
                </div>

                <div className="award">
                <p> <box-icon type='solid' name='star'></box-icon> Trustpilot</p>
                <p>4.7 average rating</p>
                </div>

                <div className="award">
                <p> <box-icon type='logo' name='google-plus-circle'></box-icon> G CROWD</p>
                <p>Easiest Setup Summer 2021</p>
                </div>

                <div className="award">
                <p> <box-icon type='logo' name='google-plus-circle'></box-icon> G CROWD</p>
                <p>Best Usability Summer 2021</p>
                </div>
            </div>

        </div>
    );
}

export default SellingOnline;
