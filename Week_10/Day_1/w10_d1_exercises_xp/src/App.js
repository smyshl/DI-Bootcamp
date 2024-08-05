import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.js';
import { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Exercise_1 from './components/Exercise_1.js';
import Exercise_2 from './components/Exercise_2.js';
import Exercise_3 from './components/Exercise_3.js';


export const ThemeContext = createContext();


function App() {
  const [ lightTheme, setLightTheme ] = useState(true)

  return (
    <ThemeContext.Provider value={{ lightTheme, setLightTheme }}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Week 10 Day 1 Exercises XP</h1>
      </header>        
        <nav className="App-header">
        <ul>
                <li>
                    <NavLink to="/exercise1"><h2>Exercise 1</h2></NavLink>
                </li>
                <li>
                    <NavLink to="/exercise2"><h2>Exercise 2</h2></NavLink>
                </li>
                <li>
                    <NavLink to="/exercise3"><h2>Exercise 3</h2></NavLink>
                </li>
        </ul>
        </nav>




      <Routes>
        <Route path="/exercise1" element={<ErrorBoundary><Exercise_1 /></ErrorBoundary>} />
        <Route path="/exercise2" element={<ErrorBoundary><Exercise_2 /></ErrorBoundary>} />
        <Route path="/exercise3" element={<ErrorBoundary><Exercise_3 /></ErrorBoundary>} />
      </Routes>


    </div>
    </ThemeContext.Provider>
  );
}

export default App;
