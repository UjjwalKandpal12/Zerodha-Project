import React from "react";

const linkStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "white",
  font: "inherit",
  padding: 0,
  textAlign: "left",
};

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support portal</h4>
        <button style={linkStyle}>Track Tickets</button>
      </div>
      <div className="row p-5 pt-0 d-flex align-items-start" id="supportContent">
        <div className="col-6 p-5 pt-0 ps-0">
          <h1 className="fs-3 mb-4" style={{ fontWeight: "400" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <br />
          <button style={linkStyle}>Track account opening</button>&nbsp;&nbsp;
          <button style={linkStyle}>Track segment activation</button>&nbsp;&nbsp;
          <button style={linkStyle}>Intraday margins</button>
          <br />
          <button style={linkStyle}>Kite user manual</button>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-3 pt-0">
          <h1 className="fs-3" style={{ fontWeight: "400" }}>Featured</h1>
          <ol>
            <li>
              <button style={linkStyle}>Current Takeovers and Delisting - January 2024</button>
            </li>
            <br />
            <li>
              <button style={linkStyle}>Latest Intraday leverages - MIS & CO</button>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
