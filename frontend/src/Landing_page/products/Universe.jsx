import React from "react";
function Universe() {
  let paraStyle = {
    lineHeight: "18px",
    display: "block",
    // marginTop: "10px",
    fontSize: ".75rem",
    color: "#9b9b9b",
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "500",
  };
  let button = {
    marginBottom: "10px",
    marginTop: "60px",
    textAlign:"center",
    padding: "8px 40px 8px 40px",
    backgroundColor : "#387ed1",
    borderRadius: "4px",
    fontWeight: "500",
    fontSize: "20px",
  }
  return (
    <div
      className="container text-center"
      style={{ color: "#424242", paddingBottom: "80px", paddingTop: "80px" }}
    >
      <h1 className="fs-3" style={{ lineHeight: "1.5" }}>
        The Zerodha Universe
      </h1>
      <p className="mt-3 mb-5" style={{ lineHeight: "1.8" }}>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row">
        <div className="col-4" style={{ marginTop: "30px" }}>
          {" "}
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={paraStyle}>
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4" style={{ marginTop: "30px" }}>
          {" "}
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ height: "40px" }}
          />
          <p style={paraStyle}>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4" style={{ marginTop: "30px" }}>
          {" "}
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={paraStyle}>
            Bonds trading platform that gives you <br />
            access to government bonds, corporate bonds,
            <br /> and bond funds, all in one place.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={paraStyle}>
            Systematic trading platform <br /> that allows you to create and
            backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p style={paraStyle}>
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={paraStyle}>
            Personalized advice on life <br /> and health insurance. No spam <br />and no
            mis-selling.
          </p>
        </div>
      </div>
      <button className="btn btn-primary" style={button} >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
