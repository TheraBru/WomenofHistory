// Code written by Therese Bruzell
// Component for update
// Imports
import React from 'react'
import WomanForm from './WomanForm'
import { useRef, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'


// Function for update
function Update(props) {

    // Constants for navigation and refs.
    const navigate = useNavigate();

    const newNameRef = useRef("");
    const newYearsRef = useRef("");
    const newQuoteRef = useRef("");
    const newDescRef = useRef("");
    const newImgRef = useRef("");
    const newCatRef = useRef("");

    // Effect for filling form with information
    useEffect(() => {
        newNameRef.current.value = props.woman.name;
        newYearsRef.current.value = props.woman.years;
        newQuoteRef.current.value = props.woman.quote;
        newDescRef.current.value = props.woman.description;
        newImgRef.current.value = props.woman.image;
        newCatRef.current.value = props.woman.category;
    }, [])

    // Function for updating
    function updateHandler(event){
        event.preventDefault();

        // Constants for refs
        const addedName = newNameRef.current.value;
        const addedYears = newYearsRef.current.value;
        const addedQuote = newQuoteRef.current.value;
        const addedDesc = newDescRef.current.value;
        const addedImg = newImgRef.current.value;
        const addedCat = newCatRef.current.value;

        // Add info to object
        const addedContent= {
            name: addedName,
            years: addedYears,
            quote: addedQuote,
            description: addedDesc,
            image: addedImg,
            cat: addedCat
        }

        // Fetch with put
        fetch("< your api-url >" + props.woman.id, {

            method:'PUT',
            body: JSON.stringify(addedContent),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(() =>{
            navigate('/a-z', { replace: true })
            props.resetWomen();
        })
        

    }

    // Return form component with props.
    return (
        <WomanForm onSubmit={updateHandler} 
        newNameRef={newNameRef} 
        newYearsRef={newYearsRef}
        newQuoteRef={newQuoteRef}
        newDescRef={newDescRef}
        newImgRef={newImgRef}
        newCatRef={newCatRef}
        button={"Save changes"}/>
    )
}

export default Update;
