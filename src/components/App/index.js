// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Devises from '../Devises';
import Toggle from '../Toggle';
import Result, { HandleClick } from '../Result';

import './styles.css';

import data from '../../data/currencies';

// == Composant

class App extends React.Component {
  state = {
    opened: true,
    baseAmount: 1,
    selectedCurrency: 'Brazilian Real',
    filter: '',
  }

  toggle = (event) => {
    console.log(event._reactName);
    if (event.keyCode === 27 || event._reactName === 'onClick') {
      this.setState({
        opened: !this.state.opened,
      });
    }
  }

  calculate = () => {
    const { baseAmount, selectedCurrency } = this.state;
    const selectedObj = data.find((element) => element.name === selectedCurrency);
    const result = (baseAmount * selectedObj.rate).toFixed(2);
    return Number(result, 10);
  }

  changeBaseValue = (newBaseValue) => {
    this.setState({
      baseAmount: newBaseValue,
    });
  }

  changeCurrency = (newCurrency) => {
    this.setState({
      selectedCurrency: newCurrency,
    });
  }

  filterDevise = (textSaisi) => {
    this.setState({
      filter: textSaisi,
    });
  }

  render() {
    // Je récupère ce qui se trouve dans this.state.opened
    const {
      opened, baseAmount, selectedCurrency, filter,
    } = this.state;

    const filteredCurrencies = data.filter(
      (currencyObject) => currencyObject.name.toLowerCase().includes(filter.toLocaleLowerCase()),
    );

    return (
      <div className="app">
        <Header baseAmount={baseAmount} onInputChange={this.changeBaseValue} />
        <Toggle toggle={this.toggle} open={opened} />
        {
          opened
          && (
          <Devises
            selectedCurrency={selectedCurrency}
            currencies={filteredCurrencies}
            onCurrencyClicked={this.changeCurrency}
            onFilterChange={this.filterDevise}
            filterResult={filteredCurrencies}
            filterText={filter}
          />
          )
        }
        <Result value={this.calculate()} currency={selectedCurrency} />
      </div>
    );
  }
}

// == Export
export default App;
