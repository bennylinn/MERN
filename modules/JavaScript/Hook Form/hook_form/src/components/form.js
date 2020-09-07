import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const { inputs, setInputs } = props; // assigning props to variables
    
    const onChange = e => {
        setInputs({
            ...inputs, // spread data whatever is in state
            [e.target.name]: e.target.value // updating whatever's changed 
        })
        // console.log(inputs)
    }
    
    return(
        <form>
            <div>
                <label>Username: </label> 
                <input onChange={onChange} type="text" name="userName"/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input onChange={onChange} type="text" name="email" />
            </div>
            <div>
                <label>Password: </label>
                <input onChange={onChange} type="password" name="password" />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>
    );
};
    
export default UserForm;