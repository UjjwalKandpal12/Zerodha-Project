import React from "react";
function Team() {
  return (
    <div className="container">
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{ padding: "80px 20px 0px 20px" }}
      >
        <h1
          className="fs-4 text-center"
          style={{ lineHeight: "1.5", color: "#424242", marginBottom: "4rem" }}
        >
          People
        </h1>
      </div>
      <div
        className="row d-flex  justify-content-center align-items-start gx-3 "
        style={{
          padding: "0px 20px 100px 20px",
          fontSize: "16.75px",
          color: "#424242",
        }}
      >
        <div
          className="col-5 ps-4 text-center"
          style={{ lineHeight: "1.7", fontWeight: "400" }}
        >
          <img
            src="media/images/nithinKamath.jpg"
            alt="founderimg"
            style={{
              borderRadius: "100%",
              height: "295px",
              marginBottom: "20px",
            }}
          />
          <h5>Nithin Kamath</h5>

          <p
            className="mt-3"
            style={{ fontSize: ".9rem", lineHeight: "1.8", color: "#666" }}
          >
            Founder, CEO
          </p>
        </div>
        <div
          className="col-6 pe-4"
          style={{ lineHeight: "1.8", fontWeight: "400" }}
        >
          <p className="mb-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-3">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-3">Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
