import ErrorBoundary from './components/ErrorBoundary.js';
import { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Exercise_3 from './components/Exercise_3.js';


export const ThemeContext = createContext();


function App() {
  const [ lightTheme, setLightTheme ] = useState(true)

  return (
    <ThemeContext.Provider value={{ lightTheme, setLightTheme }}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Week 10 Day 1 Daily Challenge</h1>
      </header>        


      <ErrorBoundary><Exercise_3 /></ErrorBoundary>

      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
