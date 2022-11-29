import React from "react";
import "./styles.css";
import Child from './Child.js';

export default function App() {
  const [counter, setCounter] = React.useState(1);

  return (
    <div className="App">
      <h1>Part 3: Sub-Components</h1>
      <p>Counter: {counter}</p>
      <Child step={1} setCounter={setCounter}/>
      <Child step={5} setCounter={setCounter}/>
    </div>
  );
}
