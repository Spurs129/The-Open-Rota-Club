import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


const Venue =() => {

  const [ venue, setVenue ] = useState(null)
  const [ hasError, setHasError ] = useState({ error: false, message: '' })
  // const [ image, setImage ] = useState("")
  // const [ reviews, setReview ] = useState(null)

  // Params
  const { venueId } = useParams()

    useEffect(() => {
      const getSingleVenue = async () => {
        try {
          const { data } = await axios.get(`/api/venues/${venueId}`)
          setVenue(data.data)
        } catch (err) {
            console.log(err)
            setHasError({ error: true, message: err.message })
          
        }
      }
      getSingleVenue()
    }, [venueId])

  return (

    
      <Container>
        { venue &&
          <div className="course-details">
              <h1>{venue.name}</h1>
              <hr />
              <h6>Par: {venue.par}</h6>
              <hr />
              <h6>Course Record: {venue.course_record} by {venue.course_record_holder}</h6>
              <hr />
              <h6>Average Members Score: </h6>
              <hr />
              <h6>Average Members Rating: </h6>
              <hr />
              <h6>Last hosted Open in {venue.years_hosted_open}</h6>
              <hr />
              <h6>Previous Open winners at {venue.name} include {venue.previous_winners}</h6>
              <hr />
              <Link className='review-button' to="/reviews">Post your round {venue.name}</Link>
          </div>
        }
        {/* { venue && 
          <div className='venue-images'>
            {venue.imageGallery.map(image => {
              return <div>
              <img className="image" onClick={() => setImage(image)} src={image} alt= "Golf Course"/>
              </div>
              })}
              </div>} */}
      
        {/* {image &&  
          <div className="spotlight-container" onClick={() => setImage(null)}>
            <img className="spotlight-image" src={image} alt="Golf Course"/>
          </div>} */}


      </Container>
    
  )

}

export default Venue