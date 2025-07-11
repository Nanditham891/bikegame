// import React from 'react';

// const Obstacle = ({ type, position }) => {
//     const obstacleStyle = {
//         position: 'absolute',
//         left: position.x,
//         bottom: position.y,
//         width: '50px',
//         height: '50px',
//         backgroundImage: `url(/assets/${type}.png)`,
//         backgroundSize: 'contain',
//         backgroundRepeat: 'no-repeat',
//     };

//     return <div style={obstacleStyle}></div>;
// };

// export default Obstacle;

import React from 'react';

const Obstacle = ({ type, position }) => {
  const obstacleStyle = {
    position: 'absolute',
    left: position.x,
    bottom: position.y,
    width: '10vw', // Responsive width
    height: '10vw', // Responsive height
    maxWidth: '60px', // Prevents it from getting too big on large screens
    maxHeight: '60px',
    backgroundImage: `url(/assets/${type}.png)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
  };

  return <div style={obstacleStyle}></div>;
};

export default Obstacle;
