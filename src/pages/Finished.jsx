import react from 'react'
import Books from '../database/books'

const Finished = ({read}) => {
    // console.log(read.book)
    const finishedBooks = [read]
    console.log(finishedBooks)
    return(
        <>
            <h1>Finished Books</h1>
            {/* <div className='book-grid'>
                {read.map((book) => {
                    return( 
                        // <p>{book.author}</p>
                        <>
                        </>
                    )
                })}
            </div> */}

            {finishedBooks.map((book) => 
                console.log(book)
            )}
        </>
    )
}

export default Finished; 