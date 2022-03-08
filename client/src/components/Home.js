import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      
      <div className="title-div">
        <h1 className='title'>The Open Rota Club</h1>
        <h3>A club for golfers seeking to play all 10 courses on the British Open Rota</h3>
        <Link to="/map" className='map-button'>Explore the Open Venues</Link>
      </div>

  
    </>
  )
}

export default Home