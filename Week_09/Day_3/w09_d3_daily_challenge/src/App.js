import { useState } from 'react'; 

import FormComponent from './components/FormComponent.js';
import './App.css';


function App(){

    const [ state, setState ] = useState({})

    const handleChange = (e) => {
        console.log(e.target.type, e.target.id, e.target.value);  
    }


    return (
        <div>
            <FormComponent handleChange={handleChange}/>

        </div>
    )
}

export default App;