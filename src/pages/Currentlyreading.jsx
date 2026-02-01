import react from 'react'
import { NavLink, Link } from 'react-router-dom'
import Books from '../database/books.js'

function CurrentlyReading({books}) {
    // console.log(currentlyReading)
    return (
        <>
            <h1>Currently Reading</h1>
            <div>
               { books.map((book) => {})}
            </div>
            
        </>
    )
}

export default CurrentlyReading; 