import React, { Component } from 'react';

class ChilrenTest extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                {/* {this.props.children} */}
            </div>
        )
    }
}

export default ChilrenTest;