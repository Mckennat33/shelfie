import Books from '../database/books.js'
import { Link } from 'react-router-dom'

console.log(Books.id)

const BookCard = () => {
    return (
        <>
            <h1>Book Card</h1>
            <div>
                <Link
                    to={`/books/${Books.id}`}
                >
                </Link>
            </div>
        </>
    )
}

export default BookCard

