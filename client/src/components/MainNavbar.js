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
    <Container className='nav-container'>
        <Navbar.Brand>
          <Link className='nav-item' to='/'>Home</Link>
        </Navbar.Brand>
     
        <Navbar.Brand>
          <Link className='nav-item' to='/map'>The Open Championship Venues</Link>
        </Navbar.Brand>

      {userIsAuthenticated() ?
        <>
          <Nav.Item>
            <Link className='nav-item' to="/profile">Members Area</Link>
          </Nav.Item>

          <Nav.Item onClick={handleLogout}>
            <span className='nav-item'>Logout</span>
          </Nav.Item>
        </> :
        <>
          <Nav.Item>
            <Link className='nav-item' to="/register">Register</Link>
          </Nav.Item>
          
          <Nav.Item>
            <Link className='nav-item' to="/login">Login</Link>
          </Nav.Item>
        </>}
      </Container>

      
  )
}
      export default MainNavbar