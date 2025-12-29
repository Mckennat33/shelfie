import Books from '../database/books.js'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'


// const book = Books.map((book) => {
//     // console.log(book.author)
//     return(
//         <div></div>
//     )
// })


const BookCard = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    
    const book = Books.find(b => b.id === Number(id));
    console.log(book)
    
    return (
        <>
            <button
                onClick={() => navigate(-1)}
            >Back To Books </button>
            <h1>BookDetails</h1>
            <p>Author: {book.author}</p>
            <p>Title: {book.title}</p>
            <p>Genre: {book.genre}</p>
            <p>Description: {book.description}</p>
        </>
    )
}

export default BookCard

