// Code written by Therese Bruzell
// Component for login button
// Imports
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Function for login button
function LoginButton() {

    // Navigation constance
    const navigate = useNavigate();

    // Function to handle login button
    function logHandler(){
        // control login in session storage
        if(sessionStorage.getItem('loggedin')==="<your username>"){
            sessionStorage.removeItem('loggedin');
            navigate('/', { replace: true })
        }else{
            navigate('/addnew', { replace: true })
        }
    }

    if(sessionStorage.getItem('loggedin')==="<your username>"){

        return (
            <button className='logBtn' onClick={logHandler}>Log out</button>
        )
    }else{
        return (
            <button className='logBtn' onClick={logHandler}>Sign in</button>
        )
    }
}

export default LoginButton