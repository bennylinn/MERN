import React, { Component } from 'react';

const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, blue, magenta)', 
    color: '#fff',
    border: 'none'
};
                                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    
    render() {
        return (
            <fieldset>
                <p>The light is currently { this.state.position }</p>
                <button style={btnStyle} onClick={ () => this.state.position === "On" ? this.setState({
                    position: "Off"}) 
                    : this.setState({position: "On"}) }>
                        Flip Switch
                </button>
            </fieldset>
        );
    }
}
                
export default LightSwitch;