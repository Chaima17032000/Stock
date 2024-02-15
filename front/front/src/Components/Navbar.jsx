import {Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
  <div> 
    <div className='navbar'>
    <div className="container">
  <div className="card">
    <div className="header">
      <h3>Stock Management </h3>
    </div>
    <div className="body">
      <ul>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      
      </ul>
    </div>
  </div>
</div>
</div>
  </div>
    
)
}
export default Navbar