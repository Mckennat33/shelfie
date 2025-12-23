import React from 'react'
import { NavLink  } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <NavLink to="/" className='shelfie-img' >Shelfie</NavLink>
            <div className='right-nav'>
                <p>Sign In</p>
                <p>Create an Account</p>
            </div>
               
        </div>
    )
}

export default Header;