import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Review = () => {
  const { venueId } = useParams()
  const localToken = localStorage.getItem('golf-token')
  const navigate = useNavigate()
 
  const [formData, setFormData] = useState({
    text: '',
    rating: 1,
    score: 90,
    venue: ''
  })

  const [errors, setErrors] = useState({
    text: { message: '' }
  })

  const handleChange = event => {
    if ( event.target.name === 'text') {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    } else { 
      setFormData({ ...formData, [event.target.name]: parseInt(event.target.value) })
    
    }
    console.log(formData)
    setErrors({ ...errors, [event.target.name]: '' })
  }

  const handleSubmit = async (event) => {
    
    event.preventDefault()
    try {
      await axios.post(
        `/api/reviews/`,
        formData,
        { headers: {
          Authorization : `Bearer ${localToken}`
        } }
      )
      navigate(`/venues/${venueId}`) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( ()=> {
    if (!formData.venue) {
      setFormData({ ...formData, venue: venueId })
    }

  }, [formData, venueId])


  return (
    <Container className='review-page'> 
      <h1>Submit your scorecard</h1>
      <form className='review-form' onSubmit={handleSubmit}>

          <label>What did you score?</label>
          <input className='input' name='score' onChange={handleChange} type="number" placeholder="90" min='58' max='120' value={formData.score} />

          <br></br>

          <label>Rate this Open Venue (1-5)</label>
          <input className='input' name='rating' onChange={handleChange} type="number" placeholder="1" min='1' max='5' value={formData.rating} />

          <br></br>

          <label>Review </label>
          <input className='input' name='text' type="text" value={formData.text} onChange={handleChange} /> 
        
          <br></br>

          <input className='input' id="submit" type="submit" value="Submit" />
    </form>
  </Container>
  )
}

export default Review