// Code written by Therese Bruzell
// Component for login option
// Imports
import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// Function to login
function Login() {

    // Navigation constance
    const navigate = useNavigate();

    // Reference constance
    const userNameRef = useRef();
    const passwordRef = useRef();

    // function to handle login
    function submitHandler(event){

        event.preventDefault();
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;

        // Save information in session storage
        if(userName === "<your username>" && password === "<your password>"){
            sessionStorage.setItem("loggedin", "<your username>");
            navigate('/addnew', { replace: true })
        }else{
            alert("Wrong password or login");
        }
        
    }

    // Return login form
    return (
        <form onSubmit={submitHandler} className='loginForm'>
            <label htmlFor='userName'>Userame</label>
            <input type="text" required id='userName' ref={userNameRef}></input>
            <label htmlFor='password'>Password</label>
            <input type="password" required id='password' ref={passwordRef}></input>
            <button>Login</button>
        </form>
    )
}

export default Login;