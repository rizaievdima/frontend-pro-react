import React from "react";

class FirstComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    render() {
        return (
            <div>
                <h1>FirstComponent</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default FirstComponent;
