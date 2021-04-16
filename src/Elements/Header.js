import React from "react";
import Typed from "react-typed";



const Header = () => {
    return (
       <div className="header-wrapper">
       <div className="main-info">
<h1 className="head1">Portfolio..</h1>
    <Typed
            className="typed-text" 
            strings={["Hello Everyone!!", "I am Khushi Tripathi"]}
            typeSpeed = {40}
            backSpeed={60}
            loop
    
    />
    <a href="#" className="main-btn">Know More.. </a>
       </div>
       </div>



    )
}

export default Header
