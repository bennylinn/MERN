import React, { useState } from  'react';

const FormData = (props) => {
    const {state} = props;

    return (
        <div>
            <p>Username: {state.userName}</p>
            <p>Email: {state.email}</p>
            <p>Password: {state.password}</p>
        </div>
    )
}

export default FormData;