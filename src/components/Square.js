import React from 'react';

const Square = ({ value, clickFunction }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={() => {
        clickFunction();
      }}
    >
      {value}
    </button>
  );
};

export default Square;
