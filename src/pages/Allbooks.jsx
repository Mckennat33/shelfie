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

    function handleSelect(bookId, event, book) { 
        // console.log(bookId, event, book)
        setReadSelect(prevSelect => (
            {...prevSelect, [bookId]: event  }
        )
    )
        // the problem may be we are making these objects instead of an array of objects 
        
        if(event === 'Read') {
            setRead(book)
            // setRead(prevRead => (
            //     // [...prevRead, book]
            //     {...prevRead, book}
            // ))
            console.log(read)

        } else if (event === "Want to read") {
            setWantToRead(prevWantToRead => ({
                ...prevWantToRead, 
                book
            }))
        } else if (event === 'Currently reading') {
            setCurrentlyReading(prevCurrentlyRead => ({
                ...prevCurrentlyRead, 
                book
            }))
        }    
    }  


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
                            <select value={readSelect[book.id] || 'Want to read'} className='book-bttns-container' 
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
                {/* <CurrentlyReading addToList={addToList} books={currentlyreading}  />
                <WantToRead addToList={addToList} want={wantToRead} />
                <Finished addToList={addToList} read={read} /> */}

            </div>
        </>
    )
}

export default AllBooks; 


