import React, { useEffect, useState } from 'react'
import Map, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container } from 'react-bootstrap'


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
    <Container className='map-container'>
      <h1>Choose your Open Venue</h1>
        <div className='map'>
        <Map
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          // style={{ height:800, width: 800}}
          initialViewState={{
            longitude: -3.7,
            latitude: 53.9,
            zoom: 4.8
          }}
          // onMove={evt => setViewPort(evt.viewState)}
          mapStyle='mapbox://styles/neilmcfayden/cl0k9ywbe007q15qlbrfk14bc'
          zoom={4.8}
        >
          <Marker anchor="left" className="markers" latitude={56.3514} longitude={-2.8161}><Link to={`/venues/2`} className="emoji">⛳️St Andrews </Link></Marker>
          <Marker anchor="left" className='markers' latitude={56.5964} longitude={-2.7162}><Link to={`/venues/5`} className="emoji">⛳️Carnoustie</Link></Marker>
          <Marker anchor="left" className='markers' latitude={55.2141} longitude={-4.9289}><Link to={`/venues/1`} className="emoji">⛳️Turnbury</Link></Marker>
          <Marker anchor="left" className='markers' latitude={56.0418} longitude={-2.8207}><Link to={`/venues/6`} className="emoji">⛳️Muirfield</Link></Marker>
          <Marker anchor="left" className='markers' latitude={55.5327} longitude={-4.6497}><Link to={`/venues/3`} className="emoji">⛳️Royal Troon</Link></Marker>
          <Marker anchor="left" className='markers' latitude={53.9196} longitude={-3.1178}><Link to={`/venues/8`} className="emoji">⛳️Royal Lytham</Link></Marker>
          <Marker anchor="left" className='markers' latitude={53.6821} longitude={-3.1322}><Link to={`/venues/7`} className="emoji">⛳️Royal Birkdale</Link></Marker>
          <Marker anchor="left" className='markers' latitude={53.3874} longitude={-3.1848}><Link to={`/venues/9`} className="emoji">⛳️Hoylake</Link></Marker>
          <Marker anchor="left" className='markers' latitude={51.2737} longitude={1.1669}><Link to={`/venues/4`} className="emoji">⛳️Royal St George's</Link></Marker>
          <Marker anchor="left" className='markers' latitude={54.8997} longitude={-6.4854}><Link to={`/venues/10`} className="emoji">⛳️Royal Portrush</Link></Marker>
          
        </Map>
      </div>
    </Container>
    
  )
}

export default VenueMap