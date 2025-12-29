import Books from '../database/books.js'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'


// const book = Books.map((book) => {
//     // console.log(book.author)
//     return(
//         <div></div>
//     )
// })


const BookDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const book = Books.find(b => b.id === Number(id));
    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className='back-bttn'
            >Back To Books </button>
            <h1>Book Details</h1>
            <div className='book-card'>
                <img src={book.image_url} alt="" />
                <p>Author: {book.author}</p>
                <p>Title: {book.title}</p>
                <p>Genre: {book.genre}</p>
                <p>Description: {book.description}</p>
                <p>Rating - - - - -   </p> 
                    <select className='book-bttns-container'>
                        <option className='want-to-read'>Want to read</option>
                        <option className='currently-reading'>Currenlty reading</option>
                        <option className='read'>Read</option>
                    </select>
            </div>
        </>
    )
}

export default BookDetails

