import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, idx) => {
        return (
          <li key={idx}>
            <button
              style={{
                fontWeight: idx == currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(idx);
              }}
            >
              {idx === 0 ? 'Go to game start' : `Go to move ${idx}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
