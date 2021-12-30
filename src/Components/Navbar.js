import React from "react";
import "../Styles/navbar.css";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import Orderslist from "./Orderslist";
function Navbar({ orderno, allorderdetails }) {
  function animateme() {
    const svgcont = document.querySelector(".displaylist");
    svgcont.style.display = svgcont.style.display === "none" ? "block" : "none";
  }
  return (
    <div>
      <div className="displaylist" onClick={animateme}>
        <Orderslist allorderdetails={allorderdetails} />
      </div>
      <div className="navbar">
        <div className="links">
          <div className="title">Canteen</div>

          <div className="svg cartnumber">
            <svg
              onClick={animateme}
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.6875 0H2.3125C1.03534 0 0 1.03534 0 2.3125V34.6875C0 35.9647 1.03534 37 2.3125 37H34.6875C35.9647 37 37 35.9647 37 34.6875V2.3125C37 1.03534 35.9647 0 34.6875 0Z"
                fill="rgb(240, 238, 238)"
              />
              <path
                d="M1.83917 4.55566L1.5238 5.81764L2.15468 5.97518L6.53572 7.07072L8.66047 10.2576L13.1727 23.7944L10.5101 29.1199H11.7984C11.6476 29.4262 11.5625 29.7696 11.5625 30.1316C11.5625 31.4011 12.6055 32.4441 13.875 32.4441C15.1445 32.4441 16.1875 31.4011 16.1875 30.1316C16.1875 29.7696 16.1024 29.4262 15.9516 29.1199H23.3609C23.2101 29.4262 23.125 29.7696 23.125 30.1316C23.125 31.4011 24.168 32.4441 25.4375 32.4441C26.707 32.4441 27.75 31.4011 27.75 30.1316C27.75 29.7696 27.6649 29.4262 27.5141 29.1199H28.4004V27.8191H12.6148L14.277 24.4949H28.2187L33.2773 9.31913H9.59804L7.33931 5.93066L2.47027 4.71349L1.83917 4.55566V4.55566ZM10.1525 10.6198H16.6934V13.944H11.2606L10.1525 10.6198ZM17.9942 10.6198H23.6309V13.944H17.9942V10.6198ZM24.9317 10.6198H31.4726L30.3644 13.944H24.9317V10.6198ZM11.694 15.2448H16.6934V18.569H12.8022L11.694 15.2448ZM17.9942 15.2448H23.6309V18.569H17.9942V15.2448ZM24.9317 15.2448H29.931L28.8229 18.569H24.9317V15.2448ZM13.2358 19.8698H16.6934V23.194H14.3437L13.2358 19.8698ZM17.9942 19.8698H23.6309V23.194H17.9942V19.8698ZM24.9317 19.8698H28.3893L27.2813 23.194H24.9317V19.8698ZM13.875 29.1198C14.4416 29.1198 14.8867 29.5649 14.8867 30.1315C14.8867 30.698 14.4416 31.1432 13.875 31.1432C13.3085 31.1432 12.8633 30.698 12.8633 30.1315C12.8633 29.5649 13.3085 29.1198 13.875 29.1198ZM25.4375 29.1198C26.0041 29.1198 26.4492 29.5649 26.4492 30.1315C26.4492 30.698 26.0041 31.1432 25.4375 31.1432C24.871 31.1432 24.4258 30.698 24.4258 30.1315C24.4258 29.5649 24.871 29.1198 25.4375 29.1198Z"
                fill="black"
              />
            </svg>

            <div className="orderno">{orderno}</div>
          </div>
          <div className="svg">
            <BiUserCircle className="icon" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
