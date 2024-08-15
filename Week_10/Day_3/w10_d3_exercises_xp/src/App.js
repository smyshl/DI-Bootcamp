import ErrorBoundary from './components/ErrorBoundary.jsx';
import logo from './logo.svg';
import './App.css';
import TaskApp from './components/TaskApp.jsx';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Week 10 Day 3 Exercises XP</h1>
      </header>        

      <ErrorBoundary><TaskApp /></ErrorBoundary>

    </div>
  );
}

export default App;
