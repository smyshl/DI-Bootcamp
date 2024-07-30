import { useEffect } from "react";

function Events () {

    const clickMe = () => alert("I was clicked")

    const handleKeyDown = (e) => {

        if (e.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${e.target.value}`);
        };
    ;}

    useEffect(() => {return ;}, [handleKeyDown])

    return (
        <>
        <button onClick={clickMe}>Click me</button><br />

        <input onKeyDown={handleKeyDown}></input>
               
        </>
    )
}

export default Events;