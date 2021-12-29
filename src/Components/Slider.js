import React, { useState } from "react";
import "../Styles/slider.css";
function Slider() {
  const [counter, setcounter] = useState(0);
  function change() {
    const a = [
      "https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=",
      "https://media.istockphoto.com/photos/fast-food-and-drink-on-table-picture-id1031354828?b=1&k=20&m=1031354828&s=170667a&w=0&h=jGSAtT2kc52Cs-k6jVP_hB9nQdE2ziOTOW6bQE7grfo=",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/d426e7114171445.603637152700c.jpg",
    ];

    if (counter >= a.length - 1) {
      setcounter(0);
    } else {
      setcounter(counter + 1);
    }
    const imga = document.querySelector(".slider");
    imga.src = a[counter];
  }
  return (
    <div>
      <div className="slid">
        <img
          className="slider"
          onClick={change}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/d426e7114171445.603637152700c.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Slider;
