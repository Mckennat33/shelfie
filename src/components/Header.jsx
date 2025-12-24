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
        <div className='shelfie-img-div'>
          <NavLink to="/" className='shelfie-img'>Shelfie</NavLink>
        </div>
          <div className='right-nav'>
            <p className='sign-in'>Sign In</p>
            <p className='create-account'>Create an Account</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Header
