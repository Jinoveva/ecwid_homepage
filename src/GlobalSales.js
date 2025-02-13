import React from "react";
import Lottie from "lottie-react";
import animationData from "./GlobalSales.json";
import "./GlobalSales.css";

function GlobalSales () {
    return(
        <div>
             <div className='globalSalesLottie'>
                <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true} 
                className="lottie-animation2"
                />
            </div>
 
 <div className="globalSales">
       <div className='globalSalesLeft'>
        <h5>Sell around the world</h5>
        <p className='reviewText'>Take your small business global with
        built-in international payment tools and
        translation support for 50 languages -
        and counting.
        </p>
       </div>

       <div className='globalSalesRight'>

       <div className='statsContainer'>
            <div className='statsItem'><p className='statsNumber'>50 <box-icon name='plus'></box-icon></p></div>
            <div className='statsItem'><p className='statsNumber'>175</p></div>
            <div className='statsItem'><p className='statsNumber'>50</p></div>
       </div>

        <div className='labelsContainer'>
            <div className='labelItem'><p className='labelText'>Payment gateways</p></div>
            <div className='labelItem'><p className='labelText'>Countries</p></div>
            <div className='labelItem'><p className='labelText'>Languages</p></div>
       </div>
       </div>

    </div>
        </div>
    );
}
export default GlobalSales;