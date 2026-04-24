import React from "react";
function OpenAccount() {
  return (
    <div className="container p-3 mb-5">
      <div className="row text-center mt-5">
        <h1 className="mt-5 fs-3 mb-4" style={{opacity:"0.9"}} >Open a Zerodha account</h1>
        <p className="mb-5 fs-6" style={{opacity:"0.8"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button
          className="p-2 btn btn-primary mb-5 text-bold"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <b>Sign up for free</b>
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
