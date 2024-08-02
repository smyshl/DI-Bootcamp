import React from "react";


class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {hasError: false, error: "", errorInfo: ""};
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({hasError: true, error: error, errorInfo: errorInfo});
      };

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1>An error has occurred</h1>
                </>
            )};
        return this.props.children;
    }

};


export default ErrorBoundary;