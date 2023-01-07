import React, { useState, useEffect } from "react";

const steakLookup = [
  {
    name: "Raw",
    imgSrc:
      "https://www.thedailymeal.com/img/gallery/can-you-go-to-a-steakhouse-and-order-a-completely-raw-steak/raw%20steak.JPG",
  },
  {
    name: "Rare",
    imgSrc:
      "https://www.thespruceeats.com/thmb/D270QwEO0s-5PhP8xS_qW-bbyBc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steak-doneness-from-rare-to-well-336362-03-8f1d80cb11c6489ebb0891ef9e7fa8aa.jpg",
  },
  {
    name: "Medium",
    imgSrc:
      "https://www.theglobeandmail.com/resizer/01culVIZ2tzwXEloWLuaqk7Vsu0=/1200x798/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/Y5L47TVQNFHBXKINM2CKHUJWJE",
  },
  {
    name: "Well Done!",
    imgSrc:
      "https://www.thespruceeats.com/thmb/e6ox29Qir-0dav0htiFrnBKARu0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steak-doneness-from-rare-to-well-336362-06-e5cbe1ae15cc4f2a8f084684e4e0e9ac.jpg",
  },
  {
    name: "Congratulations!",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/5/51/Charcoal_8.jpg",
  },
];

const Steak = () => {
  const [doneness, setDoneness] = useState(0);

  const { name, imgSrc } = steakLookup[doneness];
  const sentence = `Here is your ${name} steak!`;

  const sendToKitchen = () => {
    setDoneness(doneness + 1);
  };

  return (
    <div>
      <h2>{sentence}</h2>
      <img src={imgSrc} style={{ maxWidth: "500px" }} />
      {doneness < 4 && (
        <button style={{ fontSize: "24px" }} onClick={sendToKitchen}>
          Send Back To Kitchen
        </button>
      )}
    </div>
  );
};

const Restaurant = () => {
  const [showSteak, setShowSteak] = useState(false);

  return (
    <div
      style={{
        padding: "8px",
        paddingTop: "0",
        margin: "auto",
        borderColor: "brown",
        borderWidth: "4px",
        borderStyle: "solid",
        alignItems: "center",
        width: "600px",
      }}
    >
      <h1>Welcome to the web.lab Restaurant</h1>
      <button style={{ fontSize: "24px" }} onClick={() => setShowSteak((showSteak) => !showSteak)}>
        {showSteak ? "Delete Steak" : "Order Steak"}
      </button>
      {showSteak && <Steak />}
    </div>
  );
};

const App = () => {
  return (
    <>
      <div style={{ margin: "16px", fontFamily: "Avenir" }}>
        <Restaurant />
      </div>
    </>
  );
};

export default App;
