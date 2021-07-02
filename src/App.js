import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

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

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE!
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        markSquare={markSquare}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start a new game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
