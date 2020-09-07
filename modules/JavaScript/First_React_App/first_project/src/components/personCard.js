import React, { Component } from 'react';

// class PersonCard extends Component {
//     render() {
//         const {lastName, firstName, age, hairColor} = this.props;
//         return (
//             <div>
//                 <h2>{lastName}, {firstName}</h2>
//                 <p>Age: {age}</p>
//                 <p>Hair Color: {hairColor}</p>
//             </div>
//         )
//     }
// }

const PersonCard = props => {
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}

export default PersonCard