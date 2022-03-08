import React, { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import 'mapbox-gl/dist/mapbox-gl.css'

import Home from './components/Home'
import VenueMap from './components/Map'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Venue from './components/Venue'

const App = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('/api/venues/') // * <-- replace with your endpoint
  //     console.log(data)
  //   }
  //   getData()
  // })

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<VenueMap />} />
        <Route path="/:venues.ID" element={<Venue />} />
      </Routes>
    </BrowserRouter>

  )
}
export default App
