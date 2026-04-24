import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((response) => response.json())
      .then((data) => {
        setAllOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div className="orders">
      <div className="no-orders">

        <h3 className="title">Open Orders ({allOrders.length})</h3>

        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order, index) => {
                return (
                  <tr key={index} className="order-row">
                    
                    <td>{order.name}</td>

                    <td>{order.qty}</td>

                    <td>{order.price.toFixed(2)}</td>

                    <td
                      className={
                        order.mode === "BUY"
                          ? "profit order-mode"
                          : "loss order-mode"
                      }
                    >
                      {order.mode}
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {allOrders.length === 0 && (
          <p>You haven't placed any orders today</p>
        )}

        <Link to={"/"} className="btn my-5">
          Get started
        </Link>

      </div>
    </div>
  );
};

export default Orders;