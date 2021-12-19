import React, { useState, useEffect } from "react";

import annyang from "annyang";
import sanityClient from "../client";
import { async } from "@firebase/util";
import { set } from "animejs";
function Hearme({
  setquantity,
  settotalmodal,
  totalmodal,
  setallorderdetails,
  cartitem,
  setcartitem,
  setallorders,
  allorders,
}) {
  const [name1, setname1] = useState("");
  const [run, setrun] = useState(0);
  const [voice, setvoice] = useState(null);
  useEffect(() => {
    if (run > 0) {
      console.log(run);
      console.log(name1);
      sanityClient
        .fetch(
          `*[_type=="post" &&   title=="${name1}"]{

title,

price,
mainImage{
    asset->{
        url
    },
    alt
}
}`
        )
        .then((data) => {
          setvoice(data);
          settotalmodal({
            image: data[0].mainImage.asset.url,
            title: data[0].title,
            price: data[0].price,
          });
        });
    }

    setrun(0);
  }, [run]);
  // function getdet(na) {
  //   // console.log(na);

  //   console.log(name1);
  // }
  const recognizeCommands = () => {
    console.log("listening");
    if (annyang) {
      var commands = {
        hello: function () {
          console.log("HELLOOOOOOO");
        },

        "add order *tag": function (vara) {
          setname1(vara);
          setrun(1);
        },
        "quantity *tag": function (vara) {
          console.log(vara);
          if (Number(vara) > 0 && totalmodal) {
            setallorders((allorders) => [...allorders, totalmodal]);
            setcartitem(cartitem + 1);
            setallorderdetails((allorderdetails) => [
              ...allorderdetails,
              {
                each: totalmodal,
                sum: totalmodal.price * vara,
                quan: vara,
              },
            ]);
          }
        },
      };

      annyang.addCommands(commands);

      annyang.start();
    }
  };

  return (
    <div>
      <button onClick={recognizeCommands}>reco</button>
      {/* <h1>{name1.title}</h1> */}
    </div>
  );
}

export default Hearme;
