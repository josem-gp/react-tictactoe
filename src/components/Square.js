import React from 'react';

const Square = ({ value, clickFunction, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={() => {
        clickFunction();
      }}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
