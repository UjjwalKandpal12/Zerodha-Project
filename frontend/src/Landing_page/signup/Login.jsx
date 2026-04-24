import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../GeneralAuth";
function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigation, setNavigation] = useState(false);
  const handleSignupForm = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      console.log("logged in");
      setNavigation(true);
    } catch (error) {
      console.error("Error occurred while logging in:", error);
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
          Log In Now
        </h1>
        <h5 className="mt-3" style={{ color: "rgb(155, 155, 155)" }}>
          Enter email and password to log in to your account.
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
              <label for="email" class="">
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
          {navigation && navigate("/")}
        </div>
      </div>
      <div className="row-3"></div>
    </div>
  );
}

export default Login;
