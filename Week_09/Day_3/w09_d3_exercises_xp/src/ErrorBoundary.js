import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false} //, error: "", errorInfo: "" };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch = (error, errorInfo) => {
        // this.setState({ hasError: true });
        console.log("error=>", error);
        console.log("errorInfo=>", errorInfo);
      };

    render() {
        if (this.state.hasError) return <>ХУЙ</>;
        return this.props.children;
      }

    // render(){
    //                 console.log(this.state.hasError)
    //     if (this.state.hasError) {
    //     return (
    //         this.props.fallback
    //         // <>
    //         // <details style={{ whiteSpace: 'pre-wrap' }}>
    //         // {this.state.error && this.state.error.toString()}
    //         // <br />
    //         // {this.state.errorInfo.componentStack}
    //         // </details>
    //         // </>
    //     )} else {

    //         return this.props.children};
    // };
};

export default ErrorBoundary;