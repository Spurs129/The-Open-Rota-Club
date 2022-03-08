import React from 'react'
import Map, { Marker } from 'react-map-gl'

const VenueMap = () => {

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
          <Marker className='marker' latitude={56.3514} longitude={-2.8161}></Marker>
          <Marker className='marker' latitude={56.4964} longitude={-2.7162}></Marker>
          <Marker className='marker' latitude={55.3141} longitude={-4.8289}>Turnberry⛳️</Marker>
          <Marker className='marker' latitude={56.0418} longitude={-2.8207}>Muirfield⛳️</Marker>
          <Marker className='marker' latitude={55.5327} longitude={-4.6497}>Royal Troon⛳️</Marker>
          <Marker className='marker' latitude={53.7496} longitude={-3.0178}>Royal Lytham & St-Annes⛳️</Marker>
          <Marker className='marker' latitude={53.6221} longitude={-3.0322}>Royal Birkdale⛳️</Marker>
          <Marker className='marker' latitude={53.3874} longitude={-3.1848}>Royal Liverpool⛳️</Marker>
          <Marker className='marker' latitude={51.2737} longitude={1.3669}>📌⛳️</Marker>
          <Marker className='marker' latitude={55.1997} longitude={-6.6354}>Royal Portrush⛳️</Marker>
        </Map>
      </div>
    </div>
    
  )
}

export default VenueMap