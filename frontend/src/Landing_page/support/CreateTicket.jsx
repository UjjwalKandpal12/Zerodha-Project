import React from "react";

const linkStyle = {
  textDecoration: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#0d6efd",
  font: "inherit",
  padding: 0,
  textAlign: "left",
};

function CreateTicket() {
  return (
    <div className="container">
      <div className="row d-flex " style={{ padding: "100px 30px 100px 0px" }}>
        <h1
          className="fs-3"
          style={{ lineHeight: "1.5", marginLeft: "5px", fontWeight: "600" }}
        >
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 py-5 mt-3 mb-5">
          <h4 style={{ color: "#424242" }} className="fs-5 mb-5">
            <i className="fa-solid fa-circle-plus fs-6"></i>&nbsp;Account
            Opening
          </h4>
          <ul
            style={{ listStyleType: "none", lineHeight: "2.5" }}
            className="ps-0"
          >
            <li>
              <button style={linkStyle}>Online Account opening</button>
            </li>
            <li>
              <button style={linkStyle}>Offline Account opening</button>
            </li>
            <li>
              <button style={linkStyle}>
                Company,Partnership and HUF Account Opening
              </button>
            </li>
            <li>
              <button style={linkStyle}>NRI Account Opening</button>
            </li>
            <li>
              <button style={linkStyle}>
                Zerodha IDFC FIRST Bank 3-in-1 Account
              </button>
            </li>
            <li>
              <button style={linkStyle}>Getting Started</button>
            </li>
          </ul>
        </div>
        <div className="col-4 py-5 mt-3 mb-5">
          <h4 style={{ color: "#424242" }} className="fs-5 mb-5">
            <i className="fa-solid fa-user fs-6"></i>&nbsp;Your Zerodha Account
          </h4>
          <ul
            style={{ listStyleType: "none", lineHeight: "2.5" }}
            className="ps-0"
          >
            <li>
              <button style={linkStyle}>Login Credentials</button>
            </li>
            <li>
              <button style={linkStyle}>
                Account Modification and Segment Addition
              </button>
            </li>
            <li>
              <button style={linkStyle}>DP ID and bank details</button>
            </li>
            <li>
              <button style={linkStyle}>
                Transfer and conversion of shares
              </button>
            </li>
          </ul>
        </div>
        <div className="col-4 py-5 mt-3 mb-5">
          <h4 style={{ color: "#424242" }} className="fs-5 mb-5">
            <i className="fa-solid fa-chart-column fs-6"></i>&nbsp;Your Zerodha
            Investments
          </h4>
          <ul
            style={{ listStyleType: "none", lineHeight: "2.2" }}
            className="ps-0"
          >
            <li>
              <button style={linkStyle}>
                Margin/leverage, Products and Order type
              </button>
            </li>
            <li>
              <button style={linkStyle}>Kite Web and Mobile</button>
            </li>
            <li>
              <button style={linkStyle}>Trading FAQs</button>
            </li>
            <li>
              <button style={linkStyle}>Corporate Actions</button>
            </li>
            <li>
              <button style={linkStyle}>Kite API</button>
            </li>
            <li>
              <button style={linkStyle}>PI and Other Platforms</button>
            </li>
            <li>
              <button style={linkStyle}>Stockreports+</button>
            </li>
            <li>
              <button style={linkStyle}>GTT</button>
            </li>
          </ul>
        </div>
        <div className="col-4 py-5 mb-5">
          <h4 style={{ color: "#424242" }} className="fs-5 mb-5">
            <i className="fa-solid fa-circle-plus fs-6"></i>&nbsp;Funds
          </h4>
          <ul
            style={{ listStyleType: "none", lineHeight: "2.5" }}
            className="ps-0"
          >
            <li>
              <button style={linkStyle}>Add money eMandates</button>
            </li>
            <li>
              <button style={linkStyle}>Withdraw money</button>
            </li>
            <li>
              <button style={linkStyle}>Add bank accounts</button>
            </li>
            <li>
              <button style={linkStyle}>eMandates</button>
            </li>
          </ul>
        </div>
        <div className="col-4 py-5 mb-5">
          <h4 style={{ color: "#424242" }} className="fs-5 mb-5">
            <i className="fa-solid fa-user fs-6"></i>&nbsp;Console
          </h4>
          <ul
            style={{ listStyleType: "none", lineHeight: "2.5" }}
            className="ps-0"
          >
            <li>
              <button style={linkStyle}>Portfolio</button>
            </li>
            <li>
              <button style={linkStyle}>Corporate actions</button>
            </li>
            <li>
              <button style={linkStyle}>Funds statement</button>
            </li>
            <li>
              <button style={linkStyle}>Reports</button>
            </li>
            <li>
              <button style={linkStyle}>Profile</button>
            </li>
            <li>
              <button style={linkStyle}>Segments</button>
            </li>
          </ul>
        </div>
        <div className="col-4 py-5 mb-5">
          <h4 style={{ color: "#424242" }} className="fs-5 mb-5">
            <i className="fa-solid fa-chart-column fs-6"></i>&nbsp;Coin
          </h4>
          <ul
            style={{ listStyleType: "none", lineHeight: "2.5" }}
            className="ps-0"
          >
            <li>
              <button style={linkStyle}>Mutual funds</button>
            </li>
            <li>
              <button style={linkStyle}>National Pension Scheme (NPS)</button>
            </li>
            <li>
              <button style={linkStyle}>Fixed Deposit (FD)</button>
            </li>
            <li>
              <button style={linkStyle}>Features on Coin</button>
            </li>
            <li>
              <button style={linkStyle}>Payments and Orders</button>
            </li>
            <li>
              <button style={linkStyle}>General</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
