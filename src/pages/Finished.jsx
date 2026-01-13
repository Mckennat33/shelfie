import react from 'react'
import Books from '../database/books'
import { useState } from 'react'

const Finished = ({addToList, read}) => {
    console.log(read)
    // console.log(addToList)

    const [test, setTest] = useState(false)
return (
        <>
            <p>Finished Books</p>
        </>
    )
}

export default Finished; 