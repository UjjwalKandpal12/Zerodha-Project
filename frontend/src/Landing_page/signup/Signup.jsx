import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../GeneralAuth"; 

function Signup() {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext); 
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupForm = (e) => {
    e.preventDefault();
    axios
      .post("https://zerodha-project-backend1.onrender.com/api/auth/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        
        if (response.data && response.data.user) {
          setUser(response.data.user);
        }

        navigate("/otp", { state: { email: email, password: password } });
      })
      .catch((error) => {
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
          <form className="needs-validation" onSubmit={handleSignupForm}>
            <div className="mb-3 mt-4 px-4 fs-5">
              <label htmlFor="Username" className="">
                Username
              </label>
              <input
                type="text"
                className="form-control input"
                id="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 mt-4 px-4 fs-5">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control input"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 mt-4 px-4 fs-5">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control input"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-4 px-4">
              <button
                type="submit"
                className="btn btn-primary border"
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
