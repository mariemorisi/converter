import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({ baseAmount, onInputChange }) => (
  <div className="header">
    <h1 className="header-title"> Converter </h1>
    <p className="header-subtitle">
      <input
        className="header-input"
        type="number"
        defaultValue={baseAmount}
        onChange={(evt) => {
          const newValue = parseFloat(evt.target.value, 10);
          onInputChange(newValue);
        }}
      />
      {baseAmount > 1 ? 'euros' : 'euro'}
    </p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
export default Header;
