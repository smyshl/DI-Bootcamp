import { useState } from 'react';
import './App.css';

function App(){

    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ])

    const onClickHandle = (index, e) => {
        e.preventDefault();
        const lang = [...languages];
        lang[index].votes++;
        setLanguages(lang);
    }


    return (
        <div>
        <h1>Voting App</h1>
        {languages.map((item, index) => {
            return (
            <section key={index}>
                <span>{item.votes}</span><span>{item.name}</span><a href="" onClick={(e) => onClickHandle(index, e)}>Click here</a>
            </section>
            )
            })
        }

        </div>
    )
}

export default App;