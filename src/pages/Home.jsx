import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
// import Books from '../bookdata/books'
import Books from '../database/books.js'
import Readbooks from './Readbooks.jsx';
import Image from 'react'
import BookDashboard from '../components/BookDashboard.jsx';
import BookNews from '../database/booknews.js'

console.log(BookNews)

function Home() {
    return (
        <>
            <h3>Home Page</h3>
            <BookDashboard />
            <Outlet />
            <div className='book-grid'>
                {Books.slice(0, 8).map((book) => {
                    return (
                        <div key={book.id} className='book-card'>
                            {/* If read then make the outline a different color */}
                            <img className='book-image' src={book.image_url} />
                            <p className='book-author'>Author: {book.author}</p>
                            <p className='book-title'>Title: {book.title}</p>
                            <p className='book-genre'>Genre: {book.genre}</p>
                            <p className='book-description'>Description: {book.description}</p>
                            <p className='book-pages'> Pages: {book.total_pages}</p>
                            <div className='book-bttns-container'>
                                <button className='read-book-bttn'>Read +</button>
                                <button className='remove-book-bttn'>Remove -</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home; 