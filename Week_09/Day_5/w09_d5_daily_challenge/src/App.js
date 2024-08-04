import { useState } from 'react';
import './App.css';

function App() {

  const [num_1, setNum_1] = useState(0);
  const [num_2, setNum_2] = useState(0);
  const [result, setResult] = useState(0);

  const calculateButtonClick = (e) => {
    e.preventDefault();

    setResult(num_1 + num_2);
 
  }


  return (
    <div id='main_wrapper'>

        <div onSubmit={calculateButtonClick}>
      <h1>Calculator</h1>
      <form>
      <input id='num_1' type='number' value={num_1} onChange={(e) => setNum_1(Number(e.target.value))}></input>
      <select name='operation' id='operation_select' required>
        <option value="add" selected>+</option>
      </select>
      <input id='num_2' type='number' value={num_2} onChange={(e) => setNum_2(Number(e.target.value))}></input><br />
      <input type='submit' value={"Calculate"}></input><br />
      <input id='result' disabled value={result}></input>
      </form>
        </div>



    </div>
  );
}

export default App;
