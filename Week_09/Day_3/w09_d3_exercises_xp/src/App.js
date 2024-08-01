import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Color from './Color';
import './App.css';



class BuggyCounter extends React.Component{
    constructor(){
        super();
        this.state = {counter: 0};
    }

    handleClick = () => {

            this.setState({counter: this.state.counter + 1});

    };


    render(){


            //             if (this.state.counter > 5) {
            //     throw new Error ('I crashed!');
            // };


        return(
            <>
            <h3>Counter</h3>
            <span id='counter'>{this.state.counter}</span> <button onClick={this.handleClick}>+</button>
            </>
        )


    };

};


function App(){

    return (
        <div>
        {/* <ErrorBoundary>  */}
            <BuggyCounter />
        {/* </ErrorBoundary>                */}
            <BuggyCounter />


            <Color />





        
        </div>
    )
};

export default App;