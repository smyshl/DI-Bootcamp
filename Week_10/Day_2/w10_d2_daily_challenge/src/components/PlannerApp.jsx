import { configureStore } from '@reduxjs/toolkit';

import { addTodo } from '../redux/actions.js';

import { myReducer } from '../redux/reducer.js';



const store = configureStore ({reducer: myReducer})


export function PlannerApp(){

    const combine = () => {
        alert("Trying to combine")
        store.dispatch(addTodo())
        console.log(store.getState());
        
    }

    return (
        <>
        <button onClick={combine}>Combine</button>
        </>
    )
}