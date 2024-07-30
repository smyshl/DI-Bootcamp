import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';

const carinfo = {name: "Ford", model: "Mustang"}

function App () {
    return(
        <div>
        
        <Car model={carinfo.model}/>
        
        <Events />
        
        </div>
    )
}

export default App;