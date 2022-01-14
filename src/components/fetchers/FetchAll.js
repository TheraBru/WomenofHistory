// Code written by Therese Bruzell
// Component for fetching all women
// Imports
import React from 'react'
import Woman from '../women/Woman';
import { useState, useEffect } from 'react';

// Exported function
export default function FetchAll() {

    // States for loading and fetched information
    const [isLoading, setIsLoading] = useState(true);
    const [retrievedWomen, setRetrievedWomen] = useState([]);

    // Function that reset list of fetched women
    function resetWomen(){
        setRetrievedWomen([]);
    }

    //Retrieve women from backend API only once when mounting component
    useEffect(() => {fetch("< your api-url >")
    .then(res => {
        return res.json();
    }).then(data => {
        setRetrievedWomen(data);
        setIsLoading(false);
    });
    }, [retrievedWomen.length]);
  
    if(isLoading){
        return (<p>...</p>);
    }

    // return Woman component
    return (
        <Woman retrievedWomen={retrievedWomen} resetWomen={resetWomen} /> 
    )
}
