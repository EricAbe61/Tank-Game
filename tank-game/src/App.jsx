import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [gameState, setGameState] = useState({
    redTanks: [
      { id: 'red1', position: { x: 1, y: 0 } }, 
      { id: 'red2', position: { x: 3, y: 0 } },
    ],
    blueTanks: [
      { id: 'blue1', position: { x: 1, y: 9 } }, 
      { id: 'blue2', position: { x: 3, y: 9 } },
    ],
    currentPlayer: 'red',
    winner: null,
  });

  return (
    <div className="game-container">
      <h1 className="game-title">Tank Wars</h1>

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
                {isRedTank && (
                  <img
                    src="https://st.depositphotos.com/1046670/60615/i/450/depositphotos_606154472-stock-photo-illustration-military-vehicles-tanks-painted.jpg"
                    alt="Red Tank"
                    className="tank-image"
                  />
                )}
                {isBlueTank && (
                  <img
                    src="https://st.depositphotos.com/1046670/60615/i/450/depositphotos_606153544-stock-photo-illustration-military-vehicles-tanks-painted.jpg"
                    alt="Blue Tank"
                    className="tank-image"
                  />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
