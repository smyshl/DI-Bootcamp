import React from "react";


class Child extends React.Component{
    constructor() {
        super();
    }

    componentWillUnmount() {
        alert("Hello World unmounted");
    }

    render() {
        return (
            <>
            <h3>Hello World!</h3>
            </>
        )
    }
}


class Color extends React.Component{
    constructor(){
        super();
        this.state = {favoriteColor: "red", show: true};
    }

    changeColor = () => {
        this.setState({favoriteColor: "blue"});
    };

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount(){
        setTimeout(() => this.setState({favoriteColor: "yellow"}), 10000);
    }

    componentDidUpdate(){
        console.log("after update");
    }

    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate");
        return null;
    }


    render() {

    return (
        <>
        <h2>My favorite color is {this.state.favoriteColor}</h2>
        <button onClick={this.changeColor}>Change color</button><br />

        {this.state.show ? <Child /> : <br />}

        <button onClick={() => this.setState({show: !this.state.show})}>{this.state.show ? "Unmount" : "Mount"}</button>
        </>
    )
}
};


export default Color;