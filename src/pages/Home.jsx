import React from 'react'
import { NavLink } from 'react-router-dom';
// import Books from '../bookdata/books'
import Books from '../database/books.js'
import Image from 'react'

console.log(Books)

// inside of Home what do we want to render
// All books |  Books read  | TBR 


function Home() {
    return (
        <>
            <h3>Home Page</h3>
            <NavLink
                to='/'
                // need to figure this part out.
            >
                All Books
            </NavLink>
            <div className='book-grid'>
                {Books.slice(0, 8).map((book) => {
                    return (
                        <div key={book.id} className='book-card'>
                            <img className='book-image' src={book.image_url} />
                            <p className='book-author'>Author: {book.author}</p>
                            <p className='book-title'>Title: {book.title}</p>
                            <p className='book-genre'>Genre: {book.genre}</p>
                            <p className='book-description'>Description: {book.description}</p>
                            <p className='book-pages'> Pages: {book.total_pages}</p>
                            <button>Read +</button>
                            <button>Remove -</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home; 