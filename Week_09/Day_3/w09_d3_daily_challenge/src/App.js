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
                
                const dietIndex = state.diet.findIndex((item) => e.target.id in item);
                
                if (dietIndex >= 0) {
                    newDiet = state.diet.toSpliced(dietIndex, 1, {[e.target.id]: e.target.checked});
                } else {
                    newDiet = [...state.diet];
                    newDiet.push({[e.target.id]: e.target.checked});
                }
                setState({...state, diet: newDiet});
                
            } else {
                setState({...state, diet: [{[e.target.id]: e.target.checked}]})
            };
        };
        console.log(state);
        
    };

    return (
        <div>
            <header>Week 9 Day 3 Daily Challenge: Form Container</header>
            <FormComponent state={state} handleChange={handleChange}/>

        </div>
    )
}


export default App;