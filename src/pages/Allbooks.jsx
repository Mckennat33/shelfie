import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Books from '../database/books.js'
import BookDetails from './BookDetails.jsx'
// How do we pass the book that was clicked to bookcard
const AllBooks = () => {
 
    const [ readSelect, setReadSelect ] = useState('')
    
    function handleSelect() {
        
    }

    useEffect(() => {

        console.log(readSelect)
    }, [readSelect])


    return(
        <>
            <h1>All Books</h1>
            <div className='book-grid'>
                {Books.slice(0, 9).map((book) => {
                    return (
                        <div key={book.id} className='book-card'>
                            <Link
                                to={`/books/${book.id}`}
                            >
                            <img className='book-image' src={book.image_url} />
                            <p className='book-author'>Author: {book.author}</p>
                            <p className='book-title'>Title: {book.title}</p>
                            <p className='book-genre'>Genre: {book.genre}</p>
                            </Link>
                            <form method="GET" onSubmit={handleSelect}>
                            <select value={readSelect} className='book-bttns-container' onChange={e => setReadSelect(e.target.value)}>
                                <option value={`Want to read ${book.id}`} className='want-to-read'>Want to read</option>
                                <option value={`Currently reading ${book.id}`} className='currently-reading'>Currently reading</option>
                                <option value={`Read ${book.id}`} className='read'>Read</option>
                            </select>
                            </form>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AllBooks; 
