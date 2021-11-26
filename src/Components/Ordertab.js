import React, { useState, useEffect } from "react";
import "../Styles/orderbox.css";
function Ordertab({ cartitem, price, contfullorderdetails }) {
  const [exprice, setexprice] = useState([]);
  useEffect(() => {
    setexprice((exprice) => [...exprice, price]);
  }, [cartitem]);

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
      <button className="vieworder">Order</button>
    </div>
  );
}

export default Ordertab;
