import { Link } from 'react-router-dom'

const BookDashboard = () => {
    return ( 
        <>
            <h2>Dashboard</h2>
            <div>

            <nav className='dashboard-link-container'>
                <Link
                    to='/wanttoread'
                    className='want-to-read'
                >
                    Want to Read
                </Link>
                <Link
                    to='currentlyreading'
                    className='currently-reading'
                >
                    Currently Reading 
                </Link>
                <Link
                    to='finished'
                    className='finished-books'
                >
                    Finished
                </Link>
            </nav>
            </div>
        </>
    )
}

export default BookDashboard; 