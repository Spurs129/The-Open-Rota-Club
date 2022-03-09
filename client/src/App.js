import React, { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import 'mapbox-gl/dist/mapbox-gl.css'

import Home from './components/Home'
import VenueMap from './components/Map'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Venue from './components/Venue'
import Review from './components/Review'
import MainNavbar from './components/MainNavbar'
import { Navbar } from 'react-bootstrap'
import Footer from './components/Footer'

const App = () => {

  return (

    <BrowserRouter>
      <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<VenueMap />} />
          <Route path="/venues/:venueId" element={<Venue />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/venues/:venueId/reviews" element ={<Review />} />

        </Routes>
      <Footer />
    </BrowserRouter>

  )
}
export default App
