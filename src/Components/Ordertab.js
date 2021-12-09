import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import "../Styles/orderbox.css";

function Ordertab({ cartitem, price, contfullorderdetails, allorderdetails }) {
  const baseURL = "http://localhost:5000/order";
  var holdproceed = document.querySelector(".holdproceed");
  const [dataid, setdataid] = useState(0); //gets the id of order used for updating
  const [bookcount, setbookcount] = useState(0); //decides to update order
  const [changeorder, setchangeorder] = useState(0); //if order is canceled for making new changes
  const [anobj, setanobj] = useState({}); //stores the order before changing
  const [payorder, setpayorder] = useState(false); //payment success
  const [payorderid, setpayorderid] = useState("");
  const [paypaymentid, setpaypaymentid] = useState("");
  const [paysignature, setpaysignature] = useState("");
  var finalsum = 0; //sum on order change
  var finalquanti = 0; //quan on order change
  var a = { object: [], uniqueid: 1212, sum: 0, quan: 0 };
  useEffect(() => {
    if (bookcount === 1 && changeorder === 0) {
      a.object = allorderdetails;
      allorderdetails.map((data, index) => {
        a.sum = a.sum + data.sum;
        a.quan = a.quan + data.quan;
      });
      a.uniqueid = Math.floor(Math.random() * 100000);
      setanobj(a);
      axios.post(baseURL, a);
    }
    if (bookcount === 1 && changeorder != 0) {
      axios
        .get(`http://localhost:5000/order?uniqueid=${anobj.uniqueid}`)
        .then((response) => {
          setdataid(response.data[0].id);
        })
        .catch((error) => {
          console.log(error);
        });
      if (dataid != 0) {
        allorderdetails.map((data, index) => {
          finalsum = finalsum + data.sum;
          finalquanti = finalquanti + data.quan;
        });
        axios
          .put(`http://localhost:5000/order/${dataid}`, {
            object: allorderdetails,
            uniqueid: anobj.uniqueid,
            sum: finalsum,
            quan: finalquanti,
          })
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });

        setchangeorder(changeorder + 1);
      }
    }
  }, [bookcount]);
  async function postpayment(e) {
    if (dataid != 0) {
      axios.get(`http://localhost:5000/order/${dataid}`).then((response) => {
        console.log(response.data);
      });
    }
    axios.post("http://localhost:5000/paymentorder", {
      object: anobj.object,
      sum: anobj.sum,
      quan: anobj.quan,
      uniqueid: anobj.uniqueid,
    });
    holdproceed.style.display = "none";
    const response = await axios.get(
      `http://localhost:1337/payorder/${anobj.uniqueid}`
    );
    console.log(response);

    if (response.status !== 200) {
      return;
    }
    const options = {
      key: "rzp_test_z0JK7CVBrOtHDr", // Enter the Key ID generated from the Dashboard
      amount: response.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      order_id: response.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        setpaypaymentid(response.razorpay_payment_id);
        setpayorderid(response.razorpay_order_id);
        setpaysignature(response.razorpay_signature);
        setpayorder(true);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    e.preventDefault();
  }

  let allsum = 0;
  allorderdetails.map((data, index) => {
    allsum = allsum + data.sum;
  });
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

        <p>SubTotal-{allsum}</p>
      </div>
      <button
        onClick={() => {
          setbookcount(1);
          holdproceed.style.display = "block";
        }}
        className="vieworder"
      >
        Order
      </button>
      <div className="holdproceed">
        <div className="proceed">
          <svg
            onClick={() => {
              holdproceed.style.display = "none";
              setbookcount(0);
              setchangeorder(1);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 fmIpur"
          >
            <title>cross</title>
            <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
          </svg>
          <button className="finalplace">
            <a
              className="App-link"
              onClick={postpayment}
              target="_blank"
              rel="noopener noreferrer"
            >
              proceed
            </a>
          </button>
        </div>
        <div className="proceedback"></div>
      </div>
      <div className="pa">
        {payorder && (
          <div>
            <p>{payorderid}</p>
            <p>{paypaymentid}</p>
            <p>{paysignature}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ordertab;
