import React, { Component } from 'react';

class ComponentTest extends Component {
    render() {
        const {someText, someText1} = this.props;
        return (
            <p>{this.props.someText ? someText+someText1 : "Didn't pass anything"}</p>
        )
    }
}

export default ComponentTest;