import React from "react";
import './Shop.css'
import w1 from './wimages/w1.jpg'
import w2 from './wimages/w2.jpg'
import w3 from './wimages/w3.jpg'
import  one from './wimages/1.jpg.webp'
const Shop =()=>{
    return(
        <>
        {/* <h1> this is the Shop page</h1> */}
        <div className="wpart1">
            <h1> Fashions fade, <br></br>Style is Eternal</h1>
            <div className="trio"><img src={w1}/></div>
            <div className="trio"><img src={w2}/></div>
            <div className="trio"><img src={w3}/></div>
        </div>

        {/* <!---part2--> */}
        <div className="wpart2">
            <div className="imbg"> <img src={ one}/></div>
      
        
        </div>







        {/* <!--part3--> */}


        <div className="wpart3">
            <h2> New Summer Collections</h2>

        </div>



        

        </>
    )};
export default Shop;