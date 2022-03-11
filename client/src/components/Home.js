import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {

  return (
    <Container className="homepage">
      <div className="title-div">
        <h1 className='title'>The Open Rota Club </h1>
        <h3>A membership club for golfers seeking to play all 10 courses on the British Open Rota</h3>
      </div>
      <Link to="/map"><button type="button" className="map-button">Explore the Open Venues</button></Link>
    </Container>
  )
}

export default Home