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
                <div className='book-bttns-container'>
                    <button className='read-book-bttn'>Reading +</button>
                </div>
            </div>
        </>
    )
}

export default BookDetails

