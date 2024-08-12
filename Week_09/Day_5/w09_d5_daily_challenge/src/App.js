import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [num_1, setNum_1] = useState(0);
  const [num_2, setNum_2] = useState(0);
  const [result, setResult] = useState(0);

  let selectRef = useRef();

  const calculateButtonClick = (e) => {
    e.preventDefault();

    let operand = selectRef.current.value

    if (operand === 'add') setResult(num_1 + num_2);
    if (operand === 'minus') setResult(num_1 - num_2);
    if (operand === 'multiply') setResult(num_1 * num_2);
    if (operand === 'divide') {
      if (num_2 != 0) {
        setResult(num_1 / num_2);
      } else alert("You can't divide by zero")
    }; 
  }


  return (
    <div id='main_wrapper'>

        <div id='calculator'>
      <h1>Calculator</h1>
      <form onSubmit={calculateButtonClick}>
      <input id='num_1' type='number' value={num_1} onChange={(e) => setNum_1(Number(e.target.value))}></input>
      <select name='operation' id='operation_select' required ref={selectRef}>
        <option value="add"> + </option>
        <option value="minus"> - </option>
        <option value="multiply"> * </option>
        <option value="divide"> / </option>
      </select>
      <input id='num_2' type='number' value={num_2} onChange={(e) => setNum_2(Number(e.target.value))}></input><br />
      <div>
        <input id='button' type='submit' value={"Calculate"}></input><br />
      </div>
      <div>
        <input id='result' disabled value={result}></input>
      </div>
      
      </form>
        </div>



    </div>
  );
}

export default App;
