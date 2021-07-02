import React from 'react';

const Square = ({ value, clickFunction, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={() => {
        clickFunction();
      }}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
