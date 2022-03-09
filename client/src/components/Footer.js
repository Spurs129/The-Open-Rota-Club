import React from 'react'
import { Link } from 'react-router-dom'

//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Footer = () => {

  return (
    <>
      <div className='nav-footer'>
        <Navbar>
          <Nav.Item>
            The Open Rota Club 2022 by 
            {<a className='github' id ='neil' href='https://github.com/spurs129' target='_blank' rel="noreferrer">Neil Mcfayden</a>}
          </Nav.Item>
        </Navbar>
      </div>
    </>
  )
}
export default Footer