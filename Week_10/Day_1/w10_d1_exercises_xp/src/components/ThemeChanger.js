import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";


export function ThemeChanger () {

    const { lightTheme, setLightTheme } = useContext(ThemeContext);

    useEffect (() => {
        if (lightTheme) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    }, [lightTheme])

    return (
        <>
        <button onClick={() => setLightTheme(!lightTheme)}>Switch Theme to {lightTheme === true ? "Dark" : "Light"}</button>
        </>
    )
};
