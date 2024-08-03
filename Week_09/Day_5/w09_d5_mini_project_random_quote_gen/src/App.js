import { useState } from 'react';
import quotes from './QuotesDatabase.js';
import './App.css';

// for (let i = 0; i < quotes.length; i++) {
//   console.log(i, typeof quotes[i], quotes[i].author);
  
// }


function getRandomQuote () {

  console.log(quotes.length);
  
    let random_index = Math.floor(Math.random() * (quotes.length + 1));
    let [random_quote] = quotes.splice(random_index, 1);
    return random_quote;
}


function App() {

  const [quote, setQuote] = useState(getRandomQuote());
  console.log(quote.quote);


  const onButtonClick = () => {
    if (quotes.length > 0) setQuote(getRandomQuote());
  };
  
  return (
    
    <div id="main_wrapper">

      <section>
        <h1>"{quote.quote}"</h1>
        <h5>-{quote.author}-</h5>
        <p>{quotes.length}</p>
        <button onClick={onButtonClick}>New quote</button>
      </section>

    </div>
  );
}

export default App;
