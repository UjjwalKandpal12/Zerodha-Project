import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow, showAlert } = useContext(GeneralContext);

  const handleSellClick = () => {
    if (stockPrice < 0) {
      showAlert("Price cannot be negative!", "warning");
      return;
    }
    axios
      .get(`http://localhost:5000/holdings/${uid}`)
      .then((res) => {
        const holding = res.data;

        if (!holding) {
          showAlert(`You don't have any holding of ${uid}`, "danger");
          return;
        }

        if (stockQuantity > holding.qty) {
          showAlert(
            `You don't have enough shares of ${uid} to sell!`,
            "danger",
          );
          return;
        }

        axios.post("http://localhost:5000/newOrder", {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        });

        axios.post("http://localhost:5000/sellHoldings", {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
        });

        closeSellWindow();
      })
      .catch((err) => {
        alert(
          err.response?.data?.message || "Error fetching holding information",
        );
        console.log("Error fetching holding:", err);
      });
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
