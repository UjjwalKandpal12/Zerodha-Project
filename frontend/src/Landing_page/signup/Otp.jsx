import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../GeneralAuth";

import axios from "axios";

function Otp() {
  const { login } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://zerodha-project-backend1.onrender.com/api/auth/verify-email", {
          otp,
          email: state.email,
        })
        .then((response) => {
          navigate("/");
        });
      // If OTP verification is successful, log the user in
      await login(state.email, state.password);
    } catch (error) {
      console.error("Error occurred while verifying OTP:", error);
    }
  };
  return (
    <div
      className="container"
      style={{ marginLeft: "30rem", overflow: "hidden" }}
    >
      <div className="row-3"></div>
      <div className="row-6">
        <h1
          className="mt-5 "
          style={{ lineHeight: "1.5", color: "rgb(66, 66, 66)" }}
        >
          OTP Verification
        </h1>
        <h5 className="mt-3" style={{ color: "rgb(155, 155, 155)" }}>
          Please enter the OTP sent to your email.
        </h5>
        <div
          className="card border-2"
          style={{
            width: "40rem",
            height: "20rem",
            marginTop: "2rem",
            marginBottom: "4rem",
          }}
        >
          <form className="needs-validation">
            <div class="mb-3 mt-4 px-4 fs-5">
              <label for="otp" class="form-label">
                OTP
              </label>
              <input
                type="password"
                class="form-control input"
                id="otp"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                required
              />
            </div>
            <div className="mt-4 px-4">
              <button
                type="submit"
                class="btn btn-primary border"
                style={{ width: "25%", height: "3rem" }}
                onClick={handleVerify}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row-3"></div>
    </div>
  );
}
export default Otp;
