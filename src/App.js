import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const markSquare = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(previous => {
      const last = previous[previous.length - 1];

      const newBoard = last.board.map((square, idx) => {
        if (idx === position) {
          return last.isXNext ? 'X' : '0';
        }
        return square;
      });
      return previous.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(previous => previous + 1);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h2>{message}</h2>
      <Board board={current.board} markSquare={markSquare} />
      <History history={history} />
    </div>
  );
};

export default App;
