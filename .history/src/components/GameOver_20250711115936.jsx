// import React from 'react';

// const GameOver = ({ score, onRestart }) => {
//     return (
//         <div className="game-over">
//             <h1>Game Over</h1>
//             <p>Your Score: {score}</p>
//             <button onClick={onRestart}>Restart Game</button>
//         </div>
//     );
// };

// export default GameOver;

import React from 'react';

const GameOver = ({ score, onRestart }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5vw',
        minHeight: '100vh',
        backgroundColor: '#f8f8f8',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '6vw',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          width: '90%',
          maxWidth: '400px',
        }}
      >
        <h1
          style={{
            fontSize: '6vw',
            color: '#333',
            marginBottom: '4vw',
          }}
        >
          Game Over
        </h1>
        <p
          style={{
            fontSize: '4.5vw',
            color: '#555',
            marginBottom: '6vw',
          }}
        >
          Your Score: {score}
        </p>
        <button
          onClick={onRestart}
          style={{
            padding: '3vw 6vw',
            fontSize: '4vw',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default GameOver;
