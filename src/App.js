import { useState } from 'react';


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
 
  const ops = ['/', '*', '+', '-', '.'];

  const udapteCalc = value => {
    if (
       ops.includes(value) && calc === '' ||
       ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
       return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult((calc + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => udapteCalc(i.toString())} 
        key={i}>{i}</button>
      )
    }

    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }
  return (
    <div className="App">
      <div className="Calculadora">
        <div className="mostrar">
          {result ? <span>(result)</span> : "" } &
          nbsp;
          { calc || "0" }
        </div>

        <div className="operadores">
         <button onClick={() => udapteCalc('/')}>/</button>
         <button onClick={() => udapteCalc('*')}>*</button>
         <button onClick={() => udapteCalc('+')}>+</button>
         <button onClick={() => udapteCalc('-')}>-</button>

         <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digitos">

        { createDigits() }
        <button onClick={() => udapteCalc('0')}>0</button>
        <button onClick={() => udapteCalc('.')}>.</button>
        <button onClick={calculate}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
