import React from "react";
function Stats() {
    const Style = { opacity: "0.8" }
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5" style={{opacity: "0.9"}}>Trust with confidence</h1>
          <h2 className="fs-4" style={Style}>Customer-first always</h2>
          <p className="mb-5 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India&apos;s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4" style={Style}>No spam or gimmicks</h2>
          <p className="mb-5 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h2 className="fs-4" style={Style}>The Zerodha universe</h2>
          <p className="mb-5 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4" style={Style}>Do better with money</h2>
          <p className=" text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "115%" }}
          />
          <div className="text-center p-3">
            <a href="/" style={{ textDecoration: "none" }} className="mx-4">
              Explore our products&nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              Try kite demo&nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center" >
          <img src="media/images/pressLogos.png" alt="pressLogo" />
        </div>
      </div>
    </div>
  );
}

export default Stats;
