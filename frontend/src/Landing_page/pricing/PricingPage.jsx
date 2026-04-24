import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <div className="row">
        <div className="col-10 mx-auto">
          <hr />
        </div>
      </div>
    </>
  );
}

export default PricingPage;
