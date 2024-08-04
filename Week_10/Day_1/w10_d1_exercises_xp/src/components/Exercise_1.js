import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { ThemeChanger } from './ThemeChanger';



function Exercise_1() {

    return (
        <>
        <div>
            <h2 style={{ textDecoration: 'underline' }}>Exercise 1</h2>
        </div>

        <ThemeChanger />

        </>
    )
};

export default Exercise_1;