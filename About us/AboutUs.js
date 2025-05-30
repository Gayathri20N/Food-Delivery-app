import React from "react";
import './AboutUs.css';

import img_icon from './img1.jpeg'


function AboutUs (){
   
    return(

        <div className="heading">
           <link href='https://fonts.googleapis.com/css?family=Irish Grover' rel='stylesheet'></link>
            <h1>About Us</h1>

            <p>   Welcome to Team Void , We offers a culinary journey that tantalizes your taste buds with a variety of flavors. Our platform brings together comforting classics and daring fusions, ensuring a seamless ordering process and swift delivery. 
                Whether you're seeking home-cooked meals or adventurous culinary escapades, Team Void is your trusted companion.<br/> Whether you're seeking the familiar warmth of home-cooked meals or craving an adventurous culinary escapade, Team Void is your trusted companion 
                in delivering delectable delights straight to you, wherever you are. Join us in celebrating the diverse tapestry flavors and let Team Void be your culinary guide</p>
                
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

                <div className="container">
                    <img src={img_icon} alt=''/>
                </div>
        </div>

    )
    
}

export default AboutUs;