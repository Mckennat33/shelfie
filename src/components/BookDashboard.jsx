import { Link, Outlet } from 'react-router-dom'

const BookDashboard = () => {
    return ( 
        <>
            <div className='dashboard-container'>
                <div className='logo-container'>
                    <h1 className='shelfie-logo'>Shelfie Logo</h1>
                </div>
                <nav className='dashboard-link-container'>
                    <Link 
                        to='/'
                        className='all-books'
                    >
                        Books
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
                <Outlet />
            </div>
        </>
    )
}

export default BookDashboard; 


