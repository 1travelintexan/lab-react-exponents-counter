import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} setCount={setCount} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} />
        <Exponent num={count} exponent={4} />
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />
        {/* <ExponentTwo count={count} setCount={setCount} />
        <ExponentThree count={count} setCount={setCount} />
        <ExponentFour count={count} setCount={setCount} />
        <ExponentFive count={count} setCount={setCount} />
        <ExponentSix count={count} setCount={setCount} /> */}
      </div>
    </div>
  );
}

export default App;
