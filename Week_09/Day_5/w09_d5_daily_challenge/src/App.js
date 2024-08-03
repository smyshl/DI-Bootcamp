import { useState } from 'react';
import './App.css';

function App() {
  const [ num_1, setNum_1] = useState(0);
  const [ num_2, setNum_2] = useState(0);

  const calculateButtonClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    
    // if (isNaN(Number(e.target.value))) {
    //   alert("Please enter a number");
    //   e.target.value = null;
    // }
  }


  return (
    <div id='main_wrapper'>

        <div>
      <h1>Calculator</h1>
      <form>
      <input id='num_1' type='number'></input>
      <select></select>
      <input id='num_2' type='number'></input><br />
      <button onClick={calculateButtonClick}>Calculate</button><br />
      <input id='result' disabled></input>
      </form>
        </div>



    </div>
  );
}

export default App;
