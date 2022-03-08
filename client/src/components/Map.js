import React, { useEffect, useState } from 'react'
import Map, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'
import axios from 'axios'


const VenueMap = () => {

  const [venues, setVenues] = useState([])
  const [venueList, setVenueList] = useState([])

  const [isError, setIsError] = useState(false)


  useEffect(() => {
    const getVenues = async () => {
      try {
        const { data } = await axios.get('/api/venues') 
        console.log(data)
        setVenues(data)
        console.log(data)
      } catch (err) {
        setIsError(true)
      }
    }
    getVenues()
  }, [])


  return(

    <div className='map-container'>
      <div className='map'>
        <Map
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          // style={{ height:800, width: 800}}
          initialViewState={{
            longitude: -3.7,
            latitude: 54.6,
            zoom: 7
          }}
          mapStyle='mapbox://styles/neilmcfayden/cl0helgfp000s14s241saixb1'
          zoom={5.2}
        >
          <Marker className='marker' latitude={56.3514} longitude={-2.8161}><Link to={`/venues/2`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={56.4964} longitude={-2.7162}><Link to={`/venues/5`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={55.3141} longitude={-4.8289}><Link to={`/venues/1`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={56.0418} longitude={-2.8207}><Link to={`/venues/6`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={55.5327} longitude={-4.6497}><Link to={`/venues/3`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={53.7496} longitude={-3.0178}><Link to={`/venues/8`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={53.6221} longitude={-3.0322}><Link to={`/venues/7`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={53.3874} longitude={-3.1848}><Link to={`/venues/9`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={51.2737} longitude={1.3669}><Link to={`/venues/4`}>⛳️</Link></Marker>
          <Marker className='marker' latitude={55.1997} longitude={-6.6354}><Link to={`/venues/10`}>⛳️</Link></Marker>
        </Map>
      </div>
    </div>
    
  )
}

export default VenueMap