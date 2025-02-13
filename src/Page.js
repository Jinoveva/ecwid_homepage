import React from "react";
import Lottie from "lottie-react";
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

function Page () {
    return (
        <div>
            <div className='row pageRow'>
                <div className='col-12 col-md-4'>
                    <div className='box'>
                        <svg className='googleIcon' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M480-40v-80h280v-40H600v-320h160v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h160v320H200q-33 0-56.5-23.5T120-240v-280q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v400q0 33-23.5 56.5T760-40H480ZM200-240h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-400h80-80Zm480 0h80-80Z"/></svg>
                        <h6>Live Support</h6>
                        <p>Expert support, whenever you need it.</p>
                        <p>Learn more &#8594;</p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='box'>
                        <svg className='googleIcon' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
                        <h6 className=''>Ecwid App Market</h6>
                        <p>Take your store up to the next level with new tools and apps from our Ecwid partners.</p>
                        <p>Learn more &#8594;</p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='box'>
                        <svg className='googleIcon' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/></svg>
                        <h6 className=''>Manage of mobile</h6>
                        <p>Manage business on the go with the Ecwid mobile app.</p>
                        <p>Learn more &#8594;</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;