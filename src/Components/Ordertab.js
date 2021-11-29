import React, { useState, useEffect } from "react";
import axios from "axios";

import "../Styles/orderbox.css";
function Ordertab({ cartitem, price, contfullorderdetails, allorderdetails }) {
  const [exprice, setexprice] = useState([]);
  const baseURL = "http://localhost:5000/posts";
  const [post, setPost] = React.useState(null);
  useEffect(() => {
    setexprice((exprice) => [...exprice, price]);
  }, [cartitem]);

  function createPost() {
    allorderdetails &&
      allorderdetails.map((data, index) => {
        if (data !== undefined) {
          axios
            .post(baseURL, {
              each: {
                title: data.each.title,
                image: data.each.image,
                price: data.each.price,
              },
              sum: data.sum,
              quan: data.quan,
            })
            .then((response) => {
              setPost(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
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
