// Code written by Therese Bruzell
// Component for form
// Imports
import React from 'react'

// Export form
export default function WomanForm(props) {

    return (
        <form>
            <label htmlFor='newName'>Name</label>
            <input type="text" required id='newName' ref={props.newNameRef}></input>
            <label htmlFor='newYears'>Years</label>
            <input type="text" id='newYears' ref={props.newYearsRef}></input>
            <label htmlFor='newQuote'>Quote</label>
            <input type="text" id='newQuote'  ref={props.newQuoteRef}></input>
            <label htmlFor='newDesc'>Description</label>
            <textarea required id='newDesc'  ref={props.newDescRef}></textarea>
            <label htmlFor='newImg'>Image</label>
            <input type="url" id='newImg'  ref={props.newImgRef}></input>
            <label htmlFor='newCat'>Category</label>
            <select name="category" required id='newCat'  ref={props.newCatRef}>
                <option value="Warrior">Warrior</option>
                <option value="Regent">Regent</option>
                <option value="Activist">Activist</option>
                <option value="Philosopher">Philosopher</option>
                <option value="Artist">Artist</option>
                <option value="Scientist">Scientist</option>
                <option value="Other">Other</option>
            </select>
            <button onClick={props.onSubmit}>{props.button}</button>
        </form>
    )
}
