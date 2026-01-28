import react from 'react'
import { NavLink, Link } from 'react-router-dom'
import Books from '../database/books.js'

const WantToRead = ({books}) => {
    // books.map((book => {
    //     console.log(book.status)
    // }))
    console.log(books)
    return (
        <>
            <h1>Want To Read</h1>
            <div className='want-to-read-cards'>
                
                
            </div>
            
        </>
    )
}

export default WantToRead; 