import React from "react";
import sh from './shirt.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Main.css'
import boy from './images/boy2.jpg'
import girl from './images/daily.jpg'
import sam from './images/women.jpg'

import sample from './images/sample.jpg'
import boy2 from './images/boy2.jpg'
import daily from './images/daily.jpg'
import women from './images/women.jpg'
import icon from './images/i.png'
import clo from './images/c.png'
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';


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

            <div className="part2">
                
                    <div className="box">
                        <img src={boy}/>
                        <div className="box-content">
                            <h3 className="title">Mens</h3>
                            <span className="post">nava</span>
                        </div>
                        </div>

                        <div className="box1">

                        <img src={girl}/>
                        <div className="box-content">
                            <h3 className="title">Women</h3>
                            <span className="post">nava</span>
                        </div>
                        </div>

                        <div className="box2">

                        <img src={girl}/>
                        <div className="box-content">
                            <h3 className="title">Kidsf</h3>
                            <span className="post">nava</span>
                        </div>
                        </div>                   
            </div>

            <div className="part3">
                <h1> About us</h1>
                <div className="abox">
                    <img src={sam}/>
                    <p>Fashion is defined in a number of different ways, and its application can be sometimes unclear.<br></br> 
                        Though the term fashion connotes difference, as in "the new fashions of the season", it can also
                         connote <br></br>sameness, for example in reference to "the fashions of the , implying a general uniformity.
                          Fashion can signify <br></br>the latest trends, but may often reference fashions of a previous era, leading
                           to the reappearance of fashions from <br></br>a different time period. While what is fashionable can be defined
                            by a relatively insular,esteemed and often rich aesthetic elite who make a look exclusive, such as fashion
                             houses and haute couturiers, this 'look'  is often designed by pulling references from subcultures and social
                              groups who are not considered elite, and are thus excluded from making the distinction of what is fashion themselves.</p>
                              <button type=" sumbit">  view more <FontAwesomeIcon icon={faForward} /></button>
                </div>
            </div>
            {/* <!--part4--> */}
            <div className="part4">
            <div class="boxer"></div>
                <h3> Our Blog </h3>
                <div className="image-grid">
                    <div className="column" >
                        <img src={boy2} style={{height:"450px"}}/>
                        <img src={boy2} style={{height:"490px"}}/>
                        <img src={boy2} style={{height:"600px"}}/>
                       
                        
                    </div>
                    <div className="column">
                        <img src={sample} style={{height:"600px"}}/>
                        <img src={sample} style={{height:"550px"}} />
                        <img src={boy2} style={{height:"520px"}}/>
                        
                    </div>  
                    <div className="column">
                        <img src={women} style={{height:"570px"}}/>
                        <img src={women} style={{height:"490px"}}/>
                        <img src={women} style={{height:"550px"}}/>
                        
                    </div>
               

                  
                    
                </div>


            </div>
            {/* <!---part6---> */}
            <div className=" part6">
                
                <h1> Servies </h1>
                <div className="types"><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h6> FREE SHIPPING<br></br>
                     For all orders over $99<br></br>
                     <img src={icon} style={{marginLeft:"-100px",marginTop:"-50px",position:"absolute",height:"50px"}}/>
                     </h6>

                     <h5>DELIVERY ON TIME<br></br>
                       If good have prolems<br></br>
                       <img src={clo} style={{marginLeft:"-80px",marginTop:"-50px",position:"absolute",height:"50px"}}/>
                       </h5>

                       <h4>SECURE PAYMENT<br></br>
                       100% secure payment <br></br>
                       <img src={icon} style={{marginLeft:"-100px",marginTop:"-50px",position:"absolute",height:"50px"}}/>

                       </h4>
                       
                </div>

                <div className="line"> </div>
            </div>

            {/* <!---part7---> */}
            <div className="part7">
              <div className="footer">
                
                <div className="logo-name">
                  <h3> Fashn</h3>
                  <div className="add">
                    <h4> 
                    Address: 60-49 Road 11378 Ram Nagar<br></br><br></br>
                    Phone: +91 11.188.888<br></br><br></br>
                    Email: helloworld@gmail.com
                    </h4>
                  </div>

                  <div className="icons">
                    <h3 style={{position:"absolute",marginTop:"-50px",marginLeft:"40px",fontSize:"25px"}}> Follow us </h3><br></br>
                    <div className="icon1"><FaFacebook size={32} color="#3b5998" /></div>
                    <div className="icon2"><FaInstagram size={32} color="#e1306c" /></div>
                    <div className="icon3"><FaTwitter size={32} color="#1da1f2" /></div>
                    <div className="icon4"><FaPinterest size={32} color="#bd081c" /></div>

                  </div>
                </div>
                <div className="links">
                    <h2> Information</h2>
                    <ul>
                        <li><Link>About us</Link> </li>
                        <li><Link>About us</Link> </li>
                        <li><Link>About us</Link> </li>
                        <li><Link>About us</Link> </li>
                        <li><Link>About us</Link> </li>
                    </ul>
                </div>

                <div className="links2">
                    <h2> Account</h2>
                    <ul>
                        <li><Link>About us</Link> </li>
                        <li><Link>About us</Link> </li>
                        <li><Link>About us</Link> </li>
                        <li><Link>About us</Link> </li>
                        <li><Link>About us</Link> </li>
                    </ul>
                </div>

                <div className="email">
                    <h2> Join our website for updates and knowing the new brands</h2>
                    <h5> Get Subscribe the for more updates in our sites</h5>
                    <input type="email" placeholder="E-mail"></input>
                    <button type="sumbit"><b>Subscibe</b></button>
                </div>
                
              </div>
            </div>
    

                        
            
        


        </>
        
    );
}
export default Main;
