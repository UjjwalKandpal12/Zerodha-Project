import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row my-5 d-flex align-items-center gx-0 ">
        <div className="col-6 mt-5 ">
          <img
            src="media/images/education.svg"
            alt=""
            style={{ width: "70%" }}
          />
        </div>

        <div className="col-6 mt-5">
          <h1 className="mb-4 fs-4">Free and open market education</h1>
          <p style={{ opacity: "0.9" }}>
            Varsity, the largest online stock market education book in the{" "}
            <br /> world covering everything from the basics to advanced
            trading.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Varsity&nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5" style={{ opacity: "0.9" }}>
            TradingQ&A, the most active trading and investment community in{" "}
            <br />
            India for all your market related queries.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            TradingQ&A&nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
