import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [gameState, setGameState] = useState({
    redTanks: [
      { id: 'red1', position: { x: 1, y: 0 } }, // Red tanks at the top row
      { id: 'red2', position: { x: 3, y: 0 } },
    ],
    blueTanks: [
      { id: 'blue1', position: { x: 1, y: 9 } }, // Blue tanks at the bottom row
      { id: 'blue2', position: { x: 3, y: 9 } },
    ],
    currentPlayer: 'red', // Red team starts
    winner: null,
  });

  return (
    <div className="game-container">
      {/* Header */}
      <h1 className="game-title">Tank Wars</h1>

      {/* Game Grid */}
      <div className="grid">
        {Array.from({ length: 10 }).map((_, rowIndex) =>
          Array.from({ length: 10 }).map((_, colIndex) => {
            const isRedTank = gameState.redTanks.find(
              (tank) => tank.position.x === colIndex && tank.position.y === rowIndex
            );
            const isBlueTank = gameState.blueTanks.find(
              (tank) => tank.position.x === colIndex && tank.position.y === rowIndex
            );

            return (
              <div className="grid-cell" key={`${rowIndex}-${colIndex}`}>
                {isRedTank && <div className="red-tank">🔴</div>}
                {isBlueTank && <div className="blue-tank">🔵</div>}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;


