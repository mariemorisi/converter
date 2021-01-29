import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Toggle = ({ open, toggle }) => {
  const cssClassNames = open ? 'toggler toggler--open' : 'toggler';
  return (
    <button
      className={cssClassNames}
      onKeyDown={toggle}
      onClick={toggle}
      type="button"
    > =
    </button>
  );
};

Toggle.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggle;
