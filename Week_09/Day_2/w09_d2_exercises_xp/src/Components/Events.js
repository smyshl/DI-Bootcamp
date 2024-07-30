import { useEffect, useState } from "react";

function Events () {

    const [isToggleOn, setIsToggleOn] = useState(true);

    const clickMe = () => alert("I was clicked")

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${e.target.value}`);
        };
    }

    const handleOnClick = (e) => {
        setIsToggleOn(!isToggleOn);
        // if (isToggleOn) {                       I haven't understood why, but this part of code
        //     e.target.textContent = "ON";         didn't work. I tried to use it in combination      
        // } else {                                 with specifying initial text in button "ON". 
        //     e.target.textContent = "OFF";        And in that case first click on button didn't change the text
        // }                                        but scince second clicking the text started changing.
        //                                          So I used the way which Ziv showed at the lesson
    }

    useEffect(() => {return ;}, [handleKeyDown])

    return (
        <>
        <button onClick={clickMe}>Click me</button><br />

        <input onKeyDown={handleKeyDown}></input><br />

        <button onClick={handleOnClick}>{isToggleOn ? "ON" : "OFF"}</button>
               
        </>
    )
}

export default Events;