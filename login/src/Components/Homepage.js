import React from "react"
import "./Homepage.css"
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <>
        <div className="bar">
            <nav>
                    <ul>
                    {/* the home content these link is avaliable in main page */}
                       <li><Link to="/">Home</Link></li> 
                        <li><Link to="/about">Mens</Link></li>
                        <li><Link to="/shop">Womens</Link></li>
                        <li><Link to="/fea"> Shop</Link></li>
                        <li className="dropdown">
                            <a href="#">Services</a>
                            <ul className="dropdown-content">
                                <li>
                                <Link to="/services/service1">Service 1</Link>
                                </li>
                                <li>
                                <Link to="/services/service2">Service 2</Link>
                                </li>
                                <li>
                                <Link to="/services/service3">Service 3</Link>
                                </li>
                            </ul>
                            </li>
                        <li><Link to="/blog">Blog</Link></li>
                        
                        <button class="animate-btn">Logout</button>
                        
                        
                    </ul>
            </nav>
        </div>
        
        </>
    );
}

export default Homepage;