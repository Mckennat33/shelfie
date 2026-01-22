import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Books from '../database/books.js'
import BookDetails from './BookDetails.jsx'
import CurrentlyReading from './CurrentlyReading.jsx'
import Finished from './Finished.jsx'
import WantToRead from './WantToRead.jsx'

const AllBooks = () => {
 
    const [ readSelect, setReadSelect ] = useState(Books)
    const [read, setRead] = useState([])
    const [currentlyreading, setCurrentlyReading] = useState([])
    const [wantToRead, setWantToRead] = useState([])
    const [books, setBooks] = useState(
        Books.map(book => ({
            ...book, 
            status: "Want to read"
        }))
    )

    // const read = books.filter(book => book.status === 'read') 
    // const currentlyReading = books.filter(book => book.status === 'currentlyreading') 
    // const wantToRead = books.filter(book => book.status === 'wanttoread') 




    function handleSelect(bookId, newStatus, book) { 
        setBooks(prevBooks => 
            prevBooks.map(book => 
                book.id === bookId
                ? { ...book, status: newStatus}
                : book
            )
        )

        books.map((book) => {
            if (book.id === bookId) {
                console.log(book.status)
                    switch(book.status) {
                        case "Read":
                        setRead(book)
                        break; 
                        case "Want to read":
                        setWantToRead(book)
                        break; 
                        case "Currently reading":
                        setCurrentlyReading(book)
                        break; 
                    }
            }
        })
        
    }  


    

    // sending each book to a different component based on the their status
    function addToList(bookId, event, book) {
        // depending on what drop down was selected
        // add the book to the list 
    }

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
                            <form>
                            <select value={books.status} className='book-bttns-container' 
                            onChange={(e) => handleSelect(book.id, e.target.value, book)}
                            >
                                <option value='Want to read' className='want-to-read'>Want to read</option>
                                <option value='Currently reading' className='currently-reading'>Currently reading</option>
                                <option value='Read' className='read'>Read</option>
                            </select>
                            </form>
                        </div>
                    )
                })}
            </div>
            <div>
                {/* <CurrentlyReading books={currentlyReading} />
                <WantToRead books={wantToRead} /> */}
                <Finished books={read} />  
            </div>
        </>
    )
}

export default AllBooks; 


