import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./GeneralAuth";
function Navbar() {
  const { user, logout } = useContext(AuthContext);
  console.log("USER STATE:", user);
  return (
    <div
      class="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#ffff" }}
    >
      <div class="container p-3">
        <Link class="navbar-brand ms-5" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "22%" }}
            className="ms-5"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0 fs-6" style={{ opacity: "0.6" }}>
              {user === undefined ? null : user ? (
                <>
                  <li class="nav-item">
                    <span
                      class="nav-link active"
                      style={{ cursor: "pointer" }}
                      onClick={logout}
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link class="nav-link active" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}

              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>

              <li class="nav-item">
                {user !== null ? (
                  <Link class="nav-link active" to="https://zerodha-project-dashboard-rlde.onrender.com">
                    Dashboard
                  </Link>
                ) : null}
              </li>
            </ul>
          </form>

          {/* <div className=" d-flex align-items-center ps-5 justify-content-end">
            <i class="fa-solid fa-circle-user"></i>
            <span className="ms-4">Ujjwal kandpal</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
