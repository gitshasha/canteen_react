import React, { useState, useEffect } from "react";
import axios from "axios";
import Razorpay from "razorpay";
import "../Styles/orderbox.css";
function Ordertab({ cartitem, price, contfullorderdetails, allorderdetails }) {
  const [exprice, setexprice] = useState([]);
  const baseURL = "http://localhost:5000/posts";

  useEffect(() => {
    setexprice((exprice) => [...exprice, price]);
  }, [cartitem]);
  var avar = { object: [], sum: 0, quan: 0 };

  avar.object.push(allorderdetails);
  allorderdetails &&
    allorderdetails.map((data, index) => {
      avar.sum = data.sum + avar.sum;
      avar.quan = avar.quan + data.quan;
    });

  console.log(avar);

  function createPost() {
    axios
      .post(baseURL, avar)
      .then((response) => {
        console.log(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  var sum = 0;
  exprice &&
    exprice.map((data, index) => (sum = data > 0 ? sum + data : sum + 0));
  return (
    <div className="orderbox">
      <div className="total">
        <p
          className="totalname"
          onClick={() => {
            contfullorderdetails.style.display =
              contfullorderdetails.style.display === "none" ? "block" : "none";
          }}
        >
          Your Order({cartitem})
        </p>

        <p>SubTotal-{sum}</p>
      </div>
      <button onClick={createPost} className="vieworder">
        Order
      </button>
    </div>
  );
}

export default Ordertab;
