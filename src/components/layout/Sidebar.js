// Code written by Therese Bruzell
// Component for sidebar
// Imports
import React from 'react'
import { Link } from 'react-router-dom';

// Function for sidebar
function Sidebar() {
    return (
        <aside>
            <h2>Categories</h2>
            <ul>
                <li><Link to="/a-z/activist">Activists</Link></li>
                <li><Link to="/a-z/artist" >Artists</Link></li>
                <li><Link to="/a-z/philosopher" >Philosophers</Link></li>
                <li><Link to="/a-z/regent" >Regents</Link></li>
                <li><Link to="/a-z/scientist"  >Scientists</Link></li>
                <li><Link to="/a-z/warrior" >Warriors</Link></li>
                <li><Link to="/a-z/other" >Others</Link></li>
            </ul>
        </aside>
    )
}

export default Sidebar;
