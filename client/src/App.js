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

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<VenueMap />} />
        <Route path="/venues/:venueId" element={<Venue />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" eleemnt={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}
export default App
