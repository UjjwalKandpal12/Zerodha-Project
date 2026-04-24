import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center border-bottom " style={{padding:"100px 20px 100px 20px",color:"#424242"}}>
        <h1 style={{fontSize:"1.75rem",lineHeight:"1.25"}}>Zerodha Products</h1> 
        <h3 style={{fontSize:"1.45rem",lineHeight:"1.8",marginBottom:"15px",fontWeight:"400"}}>Sleek, modern, and intuitive trading platforms</h3>
        <p style={{fontSize:"1rem",lineHeight:"1.8",marginBottom:"15px"}}>
          Check out our <a href="/" style={{textDecoration:"none"}}>investment offerings{" "}
          <i class="fa-solid fa-arrow-right"></i></a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
