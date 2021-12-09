import React from "react";

function Modal({
  setcartitem,
  ordertab,
  cartitem,
  totalmodal,
  allorders,
  setallorders,
  allorderdetails,
  setallorderdetails,
  setquantity,
  modal,
  quantity,
}) {
  return (
    <div>
      <div className="modal">
        <div className="modalback"></div>
        <div className="modelcontentcontainer">
          <div className="modalcontent">
            <svg
              onClick={() => {
                modal.style.display = "none";
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
            <div className="modalitem">
              <img src={totalmodal.image} alt="" className="modalimage" />
              <div className="modalname">
                <h1>{totalmodal.title}</h1>

                <div className="finaladd">
                  <div
                    onClick={() => {
                      setquantity(quantity + 1);
                    }}
                    className="plus"
                  >
                    +
                  </div>
                  <div className="fiadd">{quantity}</div>
                  <div
                    onClick={() => {
                      if (quantity - 1 >= 0) {
                        setquantity(quantity - 1);
                      } else {
                        setquantity(0);
                      }
                    }}
                    className="minus"
                  >
                    -
                  </div>
                </div>
                <div
                  className="orderplace"
                  onClick={() => {
                    ordertab.style.display = "block";

                    if (quantity > 0) {
                      setallorders((allorders) => [...allorders, totalmodal]);
                      setcartitem(cartitem + 1);
                      setallorderdetails((allorderdetails) => [
                        ...allorderdetails,
                        {
                          each: totalmodal,
                          sum: totalmodal.price * quantity,
                          quan: quantity,
                        },
                      ]);
                    }
                    modal.style.display = "none";
                  }}
                >
                  Order
                </div>
                <h1 className="modalprice">{totalmodal.price}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
