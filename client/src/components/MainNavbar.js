import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/auth'
// import {Buffer} from 'buffer'


//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



const MainNavbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    // Remove token
    window.localStorage.removeItem('golf-token')
    // Redirect to the home page
    navigate('/')
  }
  return (
    <div className='nav-style'>
      <div className='nav-logo'>
        <Navbar.Brand>
          <Link className='btn btn-logo' to='/'> <img className='logo' src={('')} alt='logo' key='logo' />Home </Link>
        </Navbar.Brand>
      </div>

      {userIsAuthenticated() ?
        <>
          <div className='nav-profile'>
            <Nav.Item>
              <Link className='btn btn-nav' to="/profile">Members Area</Link>
            </Nav.Item>
          </div>
          <Nav.Item onClick={handleLogout}>
            <span className='btn btn-nav'> Logout </span>
          </Nav.Item>
        </> :
        <>
          <div className='nav-login'>
            <Nav.Item>
              <Link className='btn btn-nav' to="/register"> Register </Link>
            </Nav.Item>
          </div>

          <div className='nav-login'>
            <Nav.Item>
              <Link className='btn btn-nav' to="/login">Login</Link>
            </Nav.Item>
          </div>

        </>}
      </div>

      
  )
}
      export default MainNavbar