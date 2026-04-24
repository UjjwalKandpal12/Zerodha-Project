import React from "react";
function LeftSection({
  imageUrl,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  boolean,
}) {
  return (
    <div
      className="container ps-5 pe-5"
      style={{ color: "#424242", lineHeight: "1.7" }}
    >
      <div
        className="row d-flex align-items-center gx-5 pb-5"
        style={{ paddingTop: "80px" }}
      >
        <div className="col-7 text-center me-5">
          <img src={imageUrl} alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-4">
          <h1 className="fs-3" style={{ lineHeight: "1.9" }}>
            {productName}
          </h1>
          <p
            style={{
              lineHeight: "1.8",
              marginBottom: "15px",
              fontSize: "1.15rem",
            }}
          >
            {ProductDescription}
          </p>
           { boolean === true ? (<div className="row" style={{ color: "#387ed1", fontWeight: "500" }}>
            <div className="col-6 mb-2">
              <a href={tryDemo} className="" style={{ textDecoration: "none" }}>
                Try Demo&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-6 mb-2">
              <a
                href={learnMore}
                className=""
                style={{ textDecoration: "none" }}
              >
                Learn More&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>) : null}
          
          <div className="row " style={{ marginTop: "20px" }}>
            <div className="col-6">
              <a href={googlePlay} >
                <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{height:"110%"}} />
              </a>
            </div>
            <div className="col-6">
              <a href={appStore} className="">
                <img src="media/images/appstoreBadge.svg" alt="App Store" style={{height:"110%"}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
