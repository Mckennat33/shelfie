import react from 'react'
import Books from '../database/books'
import { useState } from 'react'

const Finished = ({read}) => {
    console.log(read)
    const finishedBooks = [read]
    // console.log(finishedBooks)
    const [test, setTest] = useState(false)
return (
    <>
        {finishedBooks ? (
            <>
                <p>No books</p>
            </>
        ) : (
            <>
                <p>books</p>
            </>
        )}
    </>
    )
}

export default Finished; 