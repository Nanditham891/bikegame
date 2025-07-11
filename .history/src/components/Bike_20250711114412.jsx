// import React from "react";
// import bikeImage from "../assets/bike/bike1.jpg";
// import "./Bike.css";

// const Bike = ({ position }) => {
//   return (
//     <img
//       src={bikeImage}
//       alt="Bike"
//       style={{
//         position: "absolute",
//         bottom: position.y,
//         left: position.x,
//         width: "35px",
//         height: "35px",
//       }}
//     />
//   );
// };

// export default Bike;

import React from "react";
import bikeImage from "../assets/bike/bike1.jpg";
import "./Bike.css";

const Bike = ({ position }) => {
  return (
    <img
      src={bikeImage}
      alt="Bike"
      className="bike"
      style={{
        position: "absolute",
        bottom: `${position.y}px`,
        left: `${position.x}px`,
        width: "8vw",         // Responsive width
        height: "auto",       // Maintain aspect ratio
        maxWidth: "50px",     // Prevent too large on big screens
        minWidth: "28px",     // Still visible on small screens
        transition: "bottom 0.2s ease", // Smooth vertical movement
        zIndex: 10,
      }}
    />
  );
};

export default Bike;

