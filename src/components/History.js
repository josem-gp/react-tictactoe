import React from 'react';

const History = ({ history }) => {
  return (
    <ul>
      {history.map((_, idx) => {
        return (
          <li key={idx}>
            <button type="button">
              {idx === 0 ? 'Go to game start' : `Go to move ${idx}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
