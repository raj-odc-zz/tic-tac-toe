import React from 'react';

import './Square.css';

const Square = (props) => {
  const { squareValue, onClick, squareIndex } = props;
  let squareClassName = 'Field';
  if (squareValue) {
    squareClassName += ` is-player-${squareValue}`;
  }
  return (
    <div
      className={squareClassName}
      role="presentation"
      onClick={() => onClick(squareIndex)}
      onKeyDown={() => {}}
    />
  );
};

export default Square;
