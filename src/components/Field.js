/*
 * Replace the `alert` with the actual dispatch later on
 *
 * You already have utilit classes available to mark the current field selected by a player:
 *  .is-player-0
 *  .is-player-1
 *
 * Check out the src/index.html for pre-defined basic css classes.
 */
import React from 'react';

const Field = (props) => {
  const { fieldValue, onClick, fieldIndex } = props;
  let fieldClassName = 'Field';
  if (fieldValue) {
    fieldClassName += ` is-player-${fieldValue}`;
  }
  return (
    <div
      className={fieldClassName}
      role="presentation"
      onClick={() => onClick(fieldIndex)}
      onKeyDown={() => {}}
    />
  );
};

export default Field;
