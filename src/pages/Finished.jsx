import react from 'react'
import Books from '../database/books'
import { useState } from 'react'

const Finished = ({addToList, read}) => {
    console.log(read.book)
    // const {discription, genre, id, title, total_pages} = read.book
    // console.log(addToList)

    const [test, setTest] = useState(false)
return (
        <>
            <p>Finished Books</p>
            
            {/* <p>{discription}</p>
            <p>{genre}</p>
            <p>{id}</p>
            <p>{title}</p>
            <p>{total_pages}</p> */}
        </>
    )
}

export default Finished; 