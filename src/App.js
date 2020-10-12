import React, { Component } from "react";
import Header from "./components/Header";
import PrimeNumberTable from "./components/PrimeNumberTable";
import { getPrimeNumbers, getPrimeProduct } from "./components/GetPrimeNumbers";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      primes: {
        value: 0,
        listOfProducts: [[]],
        listOfPrimes: [],
      },
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    const valueFromInput = e.target.value;

    this.setState({
      primes: {
        value: valueFromInput,
        listOfPrimes: ["", ...getPrimeNumbers(valueFromInput)],
        listOfProducts: [...getPrimeProduct(valueFromInput)],
      },
    });
  };

  render() {
    return (
      <div>
        <Header handleChange={this.handleChange} />
        <PrimeNumberTable primes={this.state.primes} />
      </div>
    );
  }
}

export default App;
