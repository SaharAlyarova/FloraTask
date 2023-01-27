import React from 'react'
import { Link } from 'react-router-dom'
import "./styleHeader.scss"
const Header = () => {
  return (
    <div className='container'>
      <div className='headerContainer'>
      <div><h1>Floral Studio</h1></div>
        <div>
            <ul>
              <Link to={'/'} style={{color:"white",textDecoration:"none"}}>
              
                <li>Home</li>
               </Link>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Pricing</li>
                <li>Contacts</li>
                <Link to={'/addpage'} style={{color:"white",textDecoration:"none"}}><li>Add Page</li></Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header