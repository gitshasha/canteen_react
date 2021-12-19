import React from "react";

import "../Styles/items.css";
function Items({
  title,
  img,

  price,
  settotalmodal,
  modal,
}) {
  return (
    <div className="itemdisplay">
      <div className="image1">
        <img src={img} alt="" />
      </div>
      <div className="itemdetails">
        <h1 className="itemname">{title}</h1>
        <h3 className="desc">Lorem, ipsum dolor sit amet consectetu </h3>
      </div>
      <div
        className="cart"
        onClick={() => {
          settotalmodal({ image: img, title: title, price: price });
          modal.style.display = "block";
        }}
      >
        Add
      </div>
      <div className="rating">
        <h1>4.1</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          width="1rem"
          height="1rem"
          viewBox="0 0 20 20"
          aria-labelledby="icon-svg-title- icon-svg-desc-"
          role="img"
          class="sc-rbbb40-0 ffadyU"
        >
          <title>star-fill</title>
          <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Items;
