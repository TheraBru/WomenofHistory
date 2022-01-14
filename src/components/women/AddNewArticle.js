// Code written by Therese Bruzell
// Component for form page where adding new article
// Imports
import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../layout/Login';
import WomanForm from './WomanForm';

// Function for adding new article
function AddNewArticle(props) {

    // Consts for navigation and refs
    const navigate = useNavigate();

    const newNameRef = useRef();
    const newYearsRef = useRef();
    const newQuoteRef = useRef();
    const newDescRef = useRef();
    const newImgRef = useRef();
    const newCatRef = useRef();

    // Function for submitting
    function submitHandler(event){

        event.preventDefault();

        // Ref constances
        const addedName = newNameRef.current.value;
        const addedYears = newYearsRef.current.value;
        const addedQuote = newQuoteRef.current.value;
        const addedDesc = newDescRef.current.value;
        const addedImg = newImgRef.current.value;
        const addedCat = newCatRef.current.value;

        // Create object of information
        const addedContent= {
            name: addedName,
            years: addedYears,
            quote: addedQuote,
            description: addedDesc,
            image: addedImg,
            cat: addedCat
        }

        // Fetching with post method
        fetch("< your api-url >", {

            method:'POST',
            body: JSON.stringify(addedContent),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(() =>{
            navigate('/a-z', { replace: true })
        })
        ;
        
    }

    // Check if login
    if(sessionStorage.getItem('loggedin')!== "<your username>"){
        return (
            <>
            <h2>Sign in</h2> 
            <Login></Login>
            </>
        )
    }else{
        return (
            <>
                <h2>Add new article</h2>
                <WomanForm onSubmit={submitHandler} 
                newNameRef={newNameRef} 
                newYearsRef={newYearsRef}
                newQuoteRef={newQuoteRef}
                newDescRef={newDescRef}
                newImgRef={newImgRef}
                newCatRef={newCatRef}
                button={"Save new article"}></WomanForm>
            </>
        )
    }
}

export default AddNewArticle;
