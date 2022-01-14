// Code written by Therese Bruzell
// Component to fetch all women from category
// Imports
import React from 'react'
import Woman from '../women/Woman';
import { useState, useEffect } from 'react';


// Function to export
export default function FetchCat(props) {

    // States for loading and fetched information
    const [isLoading, setIsLoading] = useState(true);
    const [retrievedWomen, setRetrievedWomen] = useState([]);
    const category = props.category;

    // Retrieve women from backend API only once when mounting component
    useEffect(() =>{fetch("< your api-url >"+ category)
    .then(res => {
        return res.json();
    }).then(data => {
        setRetrievedWomen(data);
        setIsLoading(false);
    });
    }, [category]);
    
    if(isLoading){
        return (<p>...</p>);
    }

    // Return woman component.
    return (
        <Woman retrievedWomen={retrievedWomen} /> 
    )
}
