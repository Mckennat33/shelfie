import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Profile from '../pages/Profile.jsx'

function Header() {
  const [loading, setLoading] = useState(false)

  return (
    <div className='header'>
      {loading ? (
        <h1><Profile /></h1>
      ) : (
        <>
          <NavLink to="/" className='shelfie-img'>Shelfie</NavLink>
          <div className='right-nav'>
            <p>Sign In</p>
            <p>Create an Account</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Header
