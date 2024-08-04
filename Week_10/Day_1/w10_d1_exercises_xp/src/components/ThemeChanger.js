import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";


export function ThemeChanger () {

    const { lightTheme, setLightTheme } = useContext(ThemeContext);

    useEffect (() => {
        console.log(lightTheme);
        if (lightTheme) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
        return () => console.log("unmount", lightTheme);
        
    }, [lightTheme])


    return (
        <>
        <button onClick={() => setLightTheme(!lightTheme)}>Change Theme to {lightTheme === true ? "Dark" : "Light"}</button>
        </>
    )
};
