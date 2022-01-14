// Code written by Therese Bruzell
// Component for the navigation on page
// Imports
import React from "react";
import { Link } from 'react-router-dom';
 
// Function for navigation export
export default function Navigation(){
    return(
        <header>
            <h1 className="header"><Link to="/">Women of History</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/">Start</Link></li>
                    <li><Link to="/a-z">A-Z</Link></li>
                    <li><Link to="/addnew">Add new article</Link></li>
                </ul>
            </nav>
        </header>
    )
}