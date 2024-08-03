import { useState, useEffect } from 'react';
import quotes from './QuotesDatabase.js';
import './App.css';


function getRandomQuote () {
    let random_index = Math.floor(Math.random() * (quotes.length + 1));
    let random_quote = quotes.splice(random_index, 1);
    return random_quote;
}


function App() {

  const [ quote, setQuote ] = useState();
  console.log(quotes);

  useEffect(() => {
      setQuote = getRandomQuote();
  }, [])
  
  return (
    <div id="main_wrapper">

    </div>
  );
}

export default App;
