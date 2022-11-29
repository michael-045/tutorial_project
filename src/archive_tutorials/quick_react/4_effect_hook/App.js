import React from "react";
import "./styles.css";

export default function App() {
  const [currency, setCurrency] = React.useState('USD');
  const [rates, setRates] = React.useState({});
  //
  //effect function
  React.useEffect(() => { //'https://api.chucknorris.io/jokes/random'
    fetch('http://127.0.0.1:5000/get_' + currency).then(res => res.json()).then(data => {
      setRates(data.rates)
    });
  }, [currency]);

  const setUSD = () => setCurrency('USD');
  const setEUR = () => setCurrency('EUR');

  return (
    <div className="App">
      <h1>Part 4: The Effect Hook</h1>

      <button onClick={setUSD}>USD</button> <button onClick={setEUR}>EUR</button>
      <h2>{currency} Exchange Rates</h2>
      {Object.keys(rates).map(name => <li>{name}: {rates[name]}</li>)}
    </div>
  );
}
