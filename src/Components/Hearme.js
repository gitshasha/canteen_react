import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as speech from "@tensorflow-models/speech-commands";
import annyang from "annyang";
import sanityClient from "../client";
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
  const [model, setmodel] = useState(null);
  const [action, setaction] = useState(null);
  const [labels, setlabels] = useState(null);

  const loadModel = async () => {
    const recognizer = await speech.create("BROWSER_FFT");
    console.log("Models Loaders");
    await recognizer.ensureModelLoaded();
    console.log(recognizer.wordLabels());
    setmodel(recognizer);
    setlabels(recognizer.wordLabels());
  };
  useEffect(() => {
    loadModel();
  }, []);

  const recognizeCommands = async () => {
    console.log("listening");
    if (annyang) {
      var commands = {
        hello: function () {
          console.log("HELLOOOOOOO");
        },

        "add order *tag": function (vara) {
          console.log(vara);
          sanityClient
            .fetch(
              `*[_type=="post" &&   title== "${vara}"]{
              _id,
              title,
              slug,
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
              console.log(data);
            });
        },
        "quantity *tag": function (vara) {
          console.log(vara);
          if (vara > 0) {
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
    </div>
  );
}

export default Hearme;
