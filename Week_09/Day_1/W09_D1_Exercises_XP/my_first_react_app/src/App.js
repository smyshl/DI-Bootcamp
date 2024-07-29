import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals.js'

const myelement = <h1>I Love JSX!</h1>;

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  const sum = 5 + 5;
  return (
    <div className="App">
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>

      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals  favAnimals={user.favAnimals}/>

    </div>
  );
}

export default App;
