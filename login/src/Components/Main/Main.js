import React from "react";
import sh from './shirt.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Main.css'
const Main =() =>{
    const seconds =document.querySelector(".seconds .number");
    const minutes =document.querySelector(".minutes .number");
     const hours =document.querySelector(".hours .number");
     const days =document.querySelector(".days .number");
    
    let secValue =60,
       minValue =60,
        hourValue =2,
        dayValue =9
  const timeFunction =setInterval(() =>{
    secValue--;
    
    if(secValue ==0){
        minValue--;
        secValue= 60;
    }
    console.log(secValue);
    // seconds.textContent = secValue;
    // minutes.textContent = minValue;
   
  
  },1000) 
  
  
  
    return(
        <>
        
        <div className="part1">
            <h1> Fashion scale</h1>
            <h2> summer scales is running</h2><br></br><br></br>
            <p>
            Fashion design is the art of applying design, aesthetics, clothing construction and <br></br>
            natural beauty to clothing and its accessories.It is influenced by culture and different<br></br>
             trends, and has varied over time and place

            </p>
            <button class="animate"><AiOutlineShoppingCart size={24}/>Shop Now</button>
            <div className="circle">
                <h1> circle</h1>
                <img src={sh}/>
                <div className="cir1">
                    <h6><br></br> 50 %of get Off</h6>
                </div>
            
            </div>
            <div className="deal">
                <h2> Deal of the month</h2>
            </div>

        </div>
        
         <section className="container">
                  <div className="time-content">
                      <div className="time days">
                          <span className="number">08</span>
                          <span className="text">days</span>
                      </div>
                      <div className="time hours">
                          <span className="number">02</span>
                          <span className="text">hours</span>
                      </div>
                      <div className="time minutes">
                          <span className="number">60</span>
                          <span className="text">minutes</span>
                      </div>
                      <div className="time seconds">
                          <span className="number">60</span>
                          <span className="text">seconds</span>
                      </div>

                  </div>
            </section>       
            
        


        </>
        
    );
}
export default Main;
