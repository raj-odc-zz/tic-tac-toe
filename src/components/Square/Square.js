/*
 * Replace the `alert` with the actual dispatch later on
 *
 * You already have utilit classes available to mark the current square selected by a player:
 *  .is-player-0
 *  .is-player-1
 *
 * Check out the src/index.html for pre-defined basic css classes.
 */
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
