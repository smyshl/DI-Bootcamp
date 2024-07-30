import { useState, useEffect } from "react";


function Color () {

    const [favoriteColor, setFavoriteColor] = useState("red");

    const changeColor = () => {
        setFavoriteColor("blue");
    }

    useEffect (() => {                  // I didn't understand this part of the task
        alert("useEffect reached");     // or didn't get correct result
    }, []);

    return (
        <>
        
        <h2>My favorite color is {favoriteColor}</h2>
        <button onClick={changeColor}>Change color</button>
        
        </>
    )
};

export default Color;