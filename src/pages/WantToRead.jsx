import react from 'react'
import { NavLink, Link } from 'react-router-dom'
import Books from '../database/books.js'

const WantToRead = ({books}) => {
    books.map((book => {
        console.log(book.status)
    }))
    return (
        <>
            <h1>Want To Read</h1>
            <div>

            </div>
            
        </>
    )
}

export default WantToRead; 