import { useState, useEffect, useRef } from 'react';
import quotes from './QuotesDatabase.js';
import './App.css';


let quotesToDisplay = [...quotes];


function getRandomQuote () {
    let random_index = Math.floor(Math.random() * quotesToDisplay.length);
    let [random_quote] = quotesToDisplay.splice(random_index, 1);
    
  if (quotesToDisplay.length === 0) quotesToDisplay = [...quotes];
    
    return random_quote;
};


function getRandomColor () {
  const red = Math.floor(Math.random() * 257);
  const green = Math.floor(Math.random() * 257);
  const blue = Math.floor(Math.random() * 257);
  return `rgb(${red} ${green} ${blue})`;
};


function App() {

  const [ quote, setQuote ] = useState({});
  const [ color, setColor ] = useState('rgb(210 105 30)')

  useEffect (() => {
    setQuote(getRandomQuote());
  }, [])

  const onButtonClick = () => {
    const new_quote = getRandomQuote();
    setQuote(new_quote);
    setColor(getRandomColor());
  };
  
  return (
    
    <div id="main_wrapper" style={{backgroundColor: color}}>

      <section>
        <h1 style={{color: color}}>"{quote.quote}"</h1>
        <h5 style={{color: color}}>-{quote.author}-</h5>
        <button onClick={onButtonClick} style={{backgroundColor: color}}>New quote</button>
      </section>

    </div>
  );
}

export default App;
