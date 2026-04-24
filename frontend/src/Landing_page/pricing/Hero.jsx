import React from "react";
function Hero() {
  let paraStyle = {
    color: "#666",
    lineHeight: "1.8",
    marginBottom: "15px",
    padding: "0px 20px",
  }
  return (
    <div className="container">
      <div
        className="row d-flex align-items-center justify-content-center "
        style={{ padding: "100px 20px 100px 20px" }}
      >
        <h1
          className="fs-1 text-center"
          style={{ lineHeight: "1.5", color: "#424242" }}
        >
          Pricing
        </h1>
        <p
          className="text-center fs-5"
          style={{ color: "#9b9b9b", marginTop: "10px", fontWeight: "500" }}
        >
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div
        className="row d-flex  justify-content-center align-items-start gx-5 "
        style={{
          padding: "100px 20px 0px 20px",
          fontSize: "16.75px",
          color: "#424242",
        }}
      >
        <div
          className="col-4 ps-4 text-center"
          style={{ lineHeight: "1.7", fontWeight: "400" }}
        >
          <img src="media/images/pricingEquity.svg" alt="" style={{width:"250px",marginBottom:"15px"}} />
          <h1 style={{fontSize:"1.75rem",marginBottom:"20px"}}>Free equity delivery</h1>
          <p style={paraStyle} >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div
          className="col-4 pe-4 text-center"
          style={{ lineHeight: "1.7", fontWeight: "400" }}
        >
          <img src="media/images/intradayTrades.svg" alt="" style={{width:"250px",marginBottom:"15px"}} />
          <h1 style={{fontSize:"1.75rem",marginBottom:"20px"}}>Intraday and F&O trades</h1>
          <p style={paraStyle}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div
          className="col-4 pe-4 text-center"
          style={{ lineHeight: "1.7", fontWeight: "400" }}
        >
          <img src="media/images/pricingEquity.svg" alt="" style={{width:"250px",marginBottom:"15px"}} />
          <h1 style={{fontSize:"1.75rem",marginBottom:"20px"}}>Free direct MF</h1>
          <p style={paraStyle}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
