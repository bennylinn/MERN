import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const { inputs, setInputs } = props; // assigning props to variables
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [pwError, setPwError] = useState("")
    
    const onChange = e => {
        console.log(inputs)
        setInputs({
            ...inputs, // spread data whatever is in state
            [e.target.name]: e.target.value // updating whatever's changed 
        })
    }

    const createUser = e => {
        e.preventDefault();
        const { userName, email, password } = inputs;
        const newUser = { userName, email, password};
        console.log("Welcome", newUser.userName);
        setHasBeenSubmitted( true );
    }

    const handleFirstName = (e) => {
        if(e.target.value.length < 1) {
            setFirstNameError("Username is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("Username must be 3 characters or longer!");
        } else {
            setFirstNameError("")
        }
    }

    const handleEmail = (e) => {
        onChange(e)
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else {
            setEmailError("")
        }
    }

    const handlePW = (e) => {
        if(e.target.value !== inputs.confirmPassword) {
            setPwError("Passwords must match")
        } else {
            setPwError("")
        }
    }

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting the form!";
    //     } else {
    //         return "Welcome, please submit the form";
    //     }
    // }
    
    return(
        <form onSubmit={ createUser }>
            {/* <h3>{ formMessage() }</h3> */}
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3>
                : <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>Username: </label> 
                <input onChange={onChange} type="text" name="userName"/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input onChange={
                    handleEmail
                    } type="text" name="email" />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input onChange={onChange} type="password" name="password" />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input onChange={onChange} type="password" name="confirmPassword" />
                {
                    pwError ?
                    <p style={{color:'red'}}>{ pwError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User"></input>
        </form>
    );
};
    
export default UserForm;