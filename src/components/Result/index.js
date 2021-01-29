import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HandleClick = (evt) => {
  console.log(evt.target.textContent);
  evt.preventDefault();
  return (
    evt.target.textContent
  );
};

const Result = ({ value, currency }) => (
  <div className="result">
    <p className="result-num"> {value}</p>
    <p className="result-devise-name"> {currency}</p>
  </div>
);

Result.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Result;
