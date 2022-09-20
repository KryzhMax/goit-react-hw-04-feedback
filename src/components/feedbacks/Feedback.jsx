import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

export function Feedback({ options, onClick: onHandleClick }) {
  return (
    <div className={s.buttonWrapper}>
      {options.map(item => (
        <button
          key={item}
          name={item}
          className={s.feedbackButtons}
          onClick={onHandleClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
