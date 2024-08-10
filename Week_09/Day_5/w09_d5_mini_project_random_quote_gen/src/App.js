import { useState, useEffect } from 'react';
import quotes from './QuotesDatabase.js';
import './App.css';

// for (let i = 0; i < quotes.length; i++) {
//   console.log(i, quotes[i].quote);
  
// }

let counter = 0;
let buttonClicks = 0;
let quotesToDisplay = [...quotes];
// console.log(quotesToDisplay);


function getRandomQuote () {

  counter++

  
    let random_index = Math.floor(Math.random() * (quotesToDisplay.length + 1));

  // console.log("getRandomQuote quotes.length", quotesToDisplay.length, random_index, counter);
    console.log("index:", random_index, "length:", quotesToDisplay.length);
    let [random_quote] = quotesToDisplay.splice(random_index, 1);
    console.log(random_quote);
    

    
    return random_quote;
};


function App() {

  const [quote, setQuote] = useState({});

  // console.log(quote.quote, quotes.length);

  useEffect (() => {
    setQuote(getRandomQuote());
  }, [])


  const onButtonClick = () => {
    buttonClicks++
    const new_quote = getRandomQuote();
    setQuote(new_quote);    
  // console.log(`Button clicks: ${buttonClicks}. RandomQuotes calls num: ${counter}`);    

  };
  
  return (
    
    <div id="main_wrapper">

      <section>
        <h1>"{quote.quote}"</h1>
        <h5>-{quote.author}-</h5>
        <p>{quotesToDisplay.length}</p>
        <button onClick={onButtonClick}>New quote</button>
      </section>

    </div>
  );
}

export default App;
