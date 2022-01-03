import React from "react";
import "../Styles/orderlist.css";
function Orderslist({ allorderdetails }) {
  console.log(allorderdetails);
  var summer = 0;
  allorderdetails &&
    allorderdetails.map((post, index) => (summer = summer + post.sum));
  return (
    <div>
      <div className="listcontainer">
        <div className="aasas">
          {allorderdetails &&
            allorderdetails.map((post, index) => (
              <div className="cleardetails">
                <div className="toget">
                  {" "}
                  <div className="orderimage">
                    <img src={post.each.image} alt="" />
                  </div>
                  <p className="ordertitle">{post.each.title}</p>
                </div>

                <p className="orderquantity">{post.quan}</p>
                <p>{post.sum}</p>
              </div>
            ))}

          <div className="ordersum">
            <p className="total">Total</p>
            <p className="totalvalue">{summer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderslist;
