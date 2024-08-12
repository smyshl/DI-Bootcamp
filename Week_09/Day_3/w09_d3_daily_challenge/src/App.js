import { useState } from 'react'; 

import FormComponent from './components/FormComponent.js';
import './App.css';


function App(){

    const [ state, setState ] = useState({})

    const handleChange = (e) => {
        
        if (e.target.type === 'text') {
            setState({...state, [e.target.id]: e.target.value})
        };

        if (e.target.type === 'number') {
            setState({...state, [e.target.id]: Number(e.target.value)})
        };        

        if (e.target.type === 'radio') {
            setState({...state, gender: e.target.value})
        };

        if (e.target.type === 'select-one') {
            setState({...state, destination: e.target.value})
        };

        if (e.target.type === 'checkbox') {

            let newDiet;
            
            if (state.diet) {
                
                const dietIndex = state.diet.findIndex((item) => item === e.target.id);
                
                if (dietIndex >= 0) {
                    newDiet = state.diet.toSpliced(dietIndex, 1);
                } else {
                    newDiet = [...state.diet];
                    newDiet.push(e.target.id);
                }
                setState({...state, diet: newDiet});
                
            } else {
                setState({...state, diet: [e.target.id]});
            };
        };
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        let req_str = 'http://localhost:3000/?'

        const stateKeysArray = Object.keys(state);

        if (stateKeysArray.length) {
            for (let key of stateKeysArray) {
                if (key != 'diet') {
                    req_str += key + '=' + state[key] + '&';
                } else {
                    for (let item of state.diet) {
                        req_str += item + '=on' + '&';
                    }
                }
            }
            req_str = req_str.slice(0, -1);
        } else req_str = 'Nothing was entered'
    console.log('Output URL:');           
    console.log(req_str);    
    alert(req_str);
    e.target.reset()
    setState({})
    };


    return (
        <div>
            <header>Week 9 Day 3 Daily Challenge: Form Container</header>
            <FormComponent state={state} handleChange={handleChange} handleSubmit={handleSubmit} />

        </div>
    )
}


export default App;