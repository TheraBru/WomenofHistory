// Code written by Therese Bruzell
// Component for article
// Imports
import React from 'react'
import Update from './Update';
import { useState } from 'react'

// Function for articles
function Article(props) {
    const [isUpdate, setIsUpdate] = useState(false)

    // Function for deleting article
    function deleteArticle(){
        console.log(props.name);
        fetch("< your api-url >" +  props.id, {

            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(() =>{
            props.resetWomen();
        });
    }

    // Functions for editing article
    function editArticle(){
        setIsUpdate(true);
    }

    function closeUpdate(){
        setIsUpdate(false);
    }

    // Show update form if button been clicked
    if(isUpdate){
        return( 
            <div className='updateDiv'>
                <button className='closeBtn' onClick={closeUpdate}>X</button>
                <Update woman={props} resetWomen={props.resetWomen}></Update>
            </div>
        )
    }else{
        // Show article
        return (
            <article key={props.id}>
                <div>
                    <h3>{props.name}</h3>
                    <p><b>{props.years}</b></p>
                    {props.quote && <p><i>"{props.quote}"</i></p>}
                    <p>{props.description}</p>
                    {sessionStorage.getItem("loggedin") && <div> <button onClick={deleteArticle}>Delete</button> <button onClick={editArticle}>Edit</button> </div>}
                </div>
                {props.image && <img src={props.image} alt={props.name}></img>}
            </article>
        )
    }
}


export default Article;