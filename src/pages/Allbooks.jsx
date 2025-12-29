
import { Link } from 'react-router-dom'
import Books from '../database/books.js'
import BookDetails from './BookDetails.jsx'
console.log(Books)
// How do we pass the book that was clicked to bookcard
const AllBooks = () => {
                 const bookCard = Books.slice(0,1).map((book) => {
                    <Link
                        to={`/books/${book.id}`}
                    >
                        <img className='book-image' src={book.image_url} />
                        <p className='book-author'>Author: {book.author}</p>
                        <p className='book-title'>Title: {book.title}</p>
                        <p className='book-genre'>Genre: {book.genre}</p>
                        <p className='book-pages'> Pages: {book.total_pages}</p>
                        <div className='book-bttns-container'>
                            <button className='read-book-bttn'>Reading +</button>
                        </div>
                    </Link>
                 })   
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
                            <select className='book-bttns-container'>
                                <option className='want-to-read'>Want to read</option>
                                <option className='currently-reading'>Currenlty reading</option>
                                <option className='read'>Read</option>
                            </select>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AllBooks; 
