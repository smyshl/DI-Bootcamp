import React from "react";


class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {hasError: false};
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({ hasError: true, error: error, errorInfo: errorInfo});
      };


};


export default ErrorBoundary;