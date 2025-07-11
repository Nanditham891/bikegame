import React from "react";
import bikeImage from "../assets/bike/bike1.jpg";
import "./Bike.css";

const Bike = ({ position }) => {
  return (
  <img
  ref={bikeRef}
  src={getBikeImage()}
  alt="Bike"
  className="bike"
  style={{
    position: "absolute",
    bottom: "10px",
    left: "50px",
    width: "auto",
    height: "auto",
    zIndex: 2,
    transition: "transform 0.3s ease-out"
  }}
/>
  );
};

export default Bike;
