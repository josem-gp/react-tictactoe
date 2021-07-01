import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
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

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        clickFunction={() => {
          markSquare(position);
        }}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
