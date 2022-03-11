import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


const Venue =() => {

  const [ venue, setVenue ] = useState(null)
  const [ hasError, setHasError ] = useState({ error: false, message: '' })
  const [ image, setImage ] = useState("")
  // const [ reviews, setReview ] = useState(null)

  // Params
  const { venueId } = useParams()

    useEffect(() => {
      const getSingleVenue = async () => {
        try {
          const { data } = await axios.get(`/api/venues/${venueId}`)
          setVenue(data)
          console.log("Venue", data)
        } catch (err) {
            console.log(err)
            setHasError({ error: true, message: err.message })
          
        }
      }
      getSingleVenue()
    }, [venueId])

  return (

    
      <Container className="main-venue-container">
        { venue &&
          <div className="course-container">
            <div className="course-details">
              <h1>{venue.name}</h1>
              <hr />
              <h3>Par: {venue.par}</h3>
              
              <h3>Course Record: {venue.course_record} ({venue.course_record_holder})</h3>
           
              <h3>Average Members Score: </h3>
              
              <h3>Average Members Rating: </h3>
              
              <h3>Last hosted Open in {venue.years_hosted_open}</h3>
              
              <h3>Previous Open winners at {venue.name} include {venue.previous_winners}</h3>
              <hr />
              <Link className='review-button' to={`/venues/${venueId}/reviews`}><button className="round-button"> Post your round at {venue.name}</button></Link>
            </div>
          </div>
        }

        { venue &&
          <div className='course-reviews'>
            <div className='review-box'>
            <h2>Member Reviews</h2>
            {venue.reviews.map(review => {
            console.log(review)
            return <div className="review" key={review._id}>
            <span className='user'>Member no: {review.user}</span><span className='score'> Score: {review.score} </span><span className='rating'>Rating : {review.rating}</span> <br /><br /> <span className='review-text'><em>{review.text}</em></span>
            </div>
          })}
          </div>
          </div> }

      
        { venue && 
          <div className='venue-images'>
            <h2>{venue.name} image gallery</h2>
            <div className="image-container">
            <img className="image" onClick={() => setImage(venue.photo1)} src={venue.photo1} alt= "Golf Course"/>
            <img className="image" onClick={() => setImage(venue.photo2)} src={venue.photo2} alt= "Golf Course"/>
            <img className="image" onClick={() => setImage(venue.photos)} src={venue.photos} alt= "Golf Course"/>
            </div>
          </div>} 
      
        { image &&  
          <div className="spotlight-container" onClick={() => setImage(null)}>
            <img className="spotlight-image" src={image} alt="Golf Course"/>
          </div>} 

      </Container>
    
  )

}

export default Venue