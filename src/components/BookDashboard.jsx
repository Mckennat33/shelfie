import { Link, Outlet } from 'react-router-dom'

const BookDashboard = () => {
    return ( 
        <>
            <div>
                <h1>Dashboard</h1>
                <nav className='dashboard-link-container'>
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