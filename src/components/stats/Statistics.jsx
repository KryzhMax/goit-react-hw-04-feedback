import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export default function Statistics({ options, total, positivePercentage }) {
  // console.log(options);
  // console.log(positivePercentage);
  return (
    <ul className={s.feedbackList}>
      {options.map((item, index) => (
        <li key={index} className={s.Statistics}>
          {item[0]}: {item[1]}
        </li>
      ))}
      <li className={s.Statistics}>Total: {total}</li>
      <li className={s.Statistics}>
        Positive feedback: {positivePercentage.toFixed(1)}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
