import React from "react";
import bag from './imagemen/menf.jpg'
import './About.css'
import d1 from './imagemen/mode1.jpg'
import d2 from './imagemen/model11.jpg'
import d3 from './imagemen/model2.jpg'
import d4 from './imagemen/model3.jpg'
import d5 from './imagemen/model4.jpg'
import c1 from './imagemen/mode1.jpg'
import c2 from './imagemen/mode1.jpg'
import c3 from './imagemen/mode1.jpg'
const About =() =>{
    return(
        <>
        {/* <h1> this the Mens page</h1> */}
        <div className="bg">
            
            <img src={bag}/>
            <h1>Begin your style <br></br>transformation today</h1>
               <h2>LOOK SUCCESSFUL AND BE SUCCESSFUL</h2>
               <button type=" submit"><h3>Shop More</h3> </button>

        </div>
        {/* <!--part2--> */}
        <div className="Abpr2">
           {/* <h3> Collections hing</h3> */}
            <div className="diagonal">
                <img src={d1}/>
                {/* <h2> Collections clothing <br></br> <></><></></h2> */}
            </div>
            <div className="diagonal1">
                <img src={d2}/>
                <h2> Fashion is the Instant langauge  <br></br></h2>
            </div>
            <div className="diagonal2">
                <img src={d3}/>
                
              </div>
              <div className="diagonal3">
                <img src={d4}/>
                
              </div>
              <div className="diagonal4">
                <img src={d5}/>
                
              </div>

        </div>

        {/* <!---part3---> */}
        <div className="Abprt3">
            <h3> New Arrivals</h3>
            <div className="card">
                <div className="sbox">
                    <h5> Add to cart</h5>

                </div>
                <img src={c1}/>
            </div>

            <div className="card">
            <div className="sbox">
                    <h5> Add to cart</h5>

                </div>
                <img src={c2}/>

            </div>

            <div className="card">
            <div className="sbox">
                    <h5> Add to cart</h5>

                </div>

              <img src={c3}/>
            </div>
        </div>
        

    

        </>
    )};


export  default About;