import React from "react";
import "../Styles/orderlist.css";
function Orderslist({ allorderdetails }) {
  return (
    <div>
      <div className="listcontainer">
        <div className="aasas">
          {allorderdetails &&
            allorderdetails.map((post, index) => (
              <div className="cleardetails">
                <h1 className="ordertitle">{post.each.title}</h1>
                <h1 className="orderquantity">{post.quan}</h1>
                <h1>{post.sum}</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Orderslist;
