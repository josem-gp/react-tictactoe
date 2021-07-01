import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const markSquare = position => {
    if (board[position]) {
      return;
    }
    setBoard(previous => {
      return previous.map((square, idx) => {
        if (idx === position) {
          return isXNext ? 'X' : '0';
        }
        return square;
      });
    });

    setIsXNext(previous => !previous);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h2>{message}</h2>
      <Board board={board} markSquare={markSquare} />
    </div>
  );
};

export default App;
