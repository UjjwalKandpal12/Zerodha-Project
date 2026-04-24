import React from "react";
function Hero() {
  return (
    <div className="container">
      <div
        className="row d-flex align-items-center justify-content-center border-bottom"
        style={{ padding: "100px 20px 100px 20px" }}
      >
        <h1 className="fs-4 text-center" style={{ lineHeight: "1.5",color: "#424242" }}>
          We pioneered the discount broking model in India. <br /> Now, we are
          breaking ground with our technology.
        </h1>
      </div>
      <div
        className="row d-flex  justify-content-center align-items-start gx-5 "
        style={{ padding: "100px 20px 0px 20px", fontSize: "16.75px",color: "#424242" }}
      >
        <div className="col-5 ps-4" style={{lineHeight:"1.7",fontWeight:"400"}}>
          <p className="mb-4 ">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p  className="mb-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mb-2">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-5 pe-4" style={{lineHeight:"1.7",fontWeight:"400"}}>
          <p className="mb-4">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mb-4">
            <a href="/" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p  className="mb-2">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="/" style={{textDecoration:"none"}}>blog</a> or see what the media is <a href="/" style={{textDecoration:"none"}}>saying about
            us</a> or learn more about our business and product <a href="/" style={{textDecoration:"none"}}
            
            
            >philosophies</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
