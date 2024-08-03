import { useState, useEffect } from 'react';
import './App.css';


function App(){
    const [serverAnswer, setServerAnswer] = useState('');
    const [postToServer, setpostToServer] = useState('');


    useEffect(() => {
        fetch('http://localhost:5000/api/hello', {method: "GET"})
        .then(res => res.json())
        .then(_json => setServerAnswer(_json.message))
        .catch(err => console.log(err));

    }, [])


    const buttonClick = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/world', {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            message: postToServer
            })
        })
        .then(res => res.json())
        .then(_json => console.log(_json.message))
        .catch(err => console.log(err));

    }
    

    return (
        <div id='main_wrapper'>
        <h1>{serverAnswer}</h1>

        <h2>Post to Server:</h2>

        <form>
            <input type='text' placeholder='Message to server' onChange={(e) => setpostToServer(e.target.value)}></input>
            <button onClick={buttonClick}>Submit</button>
        </form>

        </div>
    )
};


export default App;