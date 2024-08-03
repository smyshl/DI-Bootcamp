import './App.css';

function App() {

  const calculateButtonClick = (e) => {
    e.preventDefault();

    e.target[4].value = Number(e.target[0].value) + Number(e.target[2].value)
 
  }


  return (
    <div id='main_wrapper'>

        <div>
      <h1>Calculator</h1>
      <form onSubmit={calculateButtonClick}>
      <input id='num_1' type='number'></input>
      <select name='operation' id='operation_select' required>
        <option value="add" selected>+</option>
      </select>
      <input id='num_2' type='number'></input><br />
      <input type='submit' value={"Calculate"}></input><br />
      <input id='result' disabled></input>
      </form>
        </div>



    </div>
  );
}

export default App;
