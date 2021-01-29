import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Devises = ({
  currencies, onCurrencyClicked, selectedCurrency, onFilterChange, filterText,
}) => (
  <div className="devises">
    <div className="devises-title">
      <input
        type="text"
        className="devises-search"
        placeholder="Filtrer les devises.."
        value={filterText}
        onChange={(evt) => {
          const textSaisi = evt.target.value;
          onFilterChange(textSaisi);
          // currencies = filterResult;
        }}
      />
    </div>
    {

        currencies.map((currency) => (
          <li
            className={currency.name === selectedCurrency ? 'devises-list devises-list--active' : 'devises-list'}
            key={currency.name}
            onClick={() => {
              const newCurrency = currency.name;
              onCurrencyClicked(newCurrency);
            }}
          >
            {currency.name}
          </li>
        ))

      }
  </div>
);

Devises.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onCurrencyClicked: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
export default Devises;
