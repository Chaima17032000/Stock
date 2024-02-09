import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>

<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </div>
  )
}

export default Navbar