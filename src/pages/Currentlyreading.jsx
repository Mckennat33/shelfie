import react from 'react'
import { NavLink } from 'react-router-dom'
import Books from '../database/books.js'

function Currentlyreading() {
    return (
        <>
            <h1>Currently Reading</h1>
            <div className='book-grid'>
                {Books.slice(0, 3).map((book) => {
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
                                <button className='read-book-bttn'>Reading +</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Currentlyreading; 