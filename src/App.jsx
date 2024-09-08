import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare() {
    setActivePlayerSymbol((currActiveSymbol) => 
      currActiveSymbol === "X" ? "O" : "X"
    );

    setGameTurns()
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayerSymbol}
        />
      </div>
      <Log/>
    </main>
  );
}

export default App;
