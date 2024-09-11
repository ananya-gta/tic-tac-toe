import React from "react";

const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSymbolSelect(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       // This line creates a new copy of the prevGameBoard array.
  //       // The map function iterates over each row (innerArray), and for each row,
  //       // it creates a new copy using [...innerArray].
  //       // This ensures that the board is updated immutably, meaning the original prevGameBoard is not directly mutated.
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedGameBoard;
  //     });

  //     onSelectSquare();
  //   }
 
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
