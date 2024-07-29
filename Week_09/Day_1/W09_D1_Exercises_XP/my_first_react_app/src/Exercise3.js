import React from "react";
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends React.Component {
    render(){
        return (
        <>
            {/* <h1 style={{color: 'red', backgroundColor: 'lightblue'}} >Header</h1> */}
            <h1 style={style_header}>Header</h1>
            <p className='para'>This is paragraph</p>
            <a href="">LINK</a><br /><br />
            <form>
                <input placeholder="Input"></input>
                <button>Button</button>
            </form><br /><br />
            <img src="https://www.thoughtco.com/thmb/l-gFtZ_ppMcecXHreugFJiTKigE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/atom-artwork-160936095-58a8f5683df78c345b8e53be.jpg" width={"300px"}/>


        </>
        )
    }
}

export default Exercise;