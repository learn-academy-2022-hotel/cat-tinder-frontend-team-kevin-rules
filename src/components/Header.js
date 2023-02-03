import React from 'react'
import greeting from '../assets/greet2.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return(
    <> 
      <div className="m-4">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <img src={ greeting } height="28" alt="welcome to kevin tail in cat font" />
            </a>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catindex">See the Cats</NavLink>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;