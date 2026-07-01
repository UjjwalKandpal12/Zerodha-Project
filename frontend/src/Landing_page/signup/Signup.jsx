import React, { useState,useContext  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../GeneralAuth";
function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigateToOtp, setNavigateToOtp] = useState(false);
  const handleSignupForm = (e) => {
    e.preventDefault();
    axios
      .post("https://zerodha-project-backend1.onrender.com/api/auth/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        // Handle successful signup
        console.log(response.data);
        setNavigateToOtp(true);
        setUser(response.data.user); // Set the user in context
        {navigateToOtp &&
            navigate("/otp", { state: { email: email, password: password } })}
      })
      .catch((error) => {
        // Handle signup error
        console.error("Error occurred while signing up:", error);
      });
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
          Signup Now
        </h1>
        <h5 className="mt-3" style={{ color: "rgb(155, 155, 155)" }}>
          This is where users can create an account.
        </h5>
        <div
          className="card border-2"
          style={{
            width: "40rem",
            height: "25rem",
            marginTop: "2rem",
            marginBottom: "4rem",
          }}
        >
          <form className="needs-validation">
            <div class="mb-3 mt-4 px-4 fs-5">
              <label for="Username" class="">
                Username
              </label>
              <input
                type="text"
                class="form-control input"
                id="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div class="mb-3 mt-4 px-4 fs-5">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control input"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="mb-3 mt-4 px-4 fs-5">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control input"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-4 px-4">
              <button
                type="submit"
                class="btn btn-primary border"
                onClick={handleSignupForm}
                style={{ width: "25%", height: "3rem" }}
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

export default Signup;
