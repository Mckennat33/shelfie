import { Link } from 'react-router-dom'

const BookDashboard = () => {
    return ( 
        <>
            <h2>Dashboard</h2>
            <nav>
                <Link>
                    Want to Read
                </Link>
                <Link>
                    Currently Reading 
                </Link>
                <Link>
                    Finished
                </Link>
            </nav>
        </>
    )
}

export default BookDashboard; 