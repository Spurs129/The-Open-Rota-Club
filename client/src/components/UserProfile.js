// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Container, Row, Card, Col, Carousel } from 'react-bootstrap'
// import { Link, useParams } from 'react-router-dom'
// import { userIsAuthenticated } from '../helpers/auth'

// const Profile = () => {

//   const localToken = localStorage.getItem('golf-token')
//   console.log('local token -> ', localToken)

//   const authAxios = axios.create({
//     headers: {
//       Authorization : `Bearer ${localToken}`
//     }
//   })

//   const [ profile, setProfile ] = useState([])
//   const [ hasError, setHasError ] = useState({ error: false, message: '' })
//   const [ venues, setVenues ] = useState([])
//   const [ user, setUser ] = useState([])

//   useEffect(() => {
//     const getData = async () => {
//     try {
//       const { data } = await authAxios.get('/api/reviews')
//       console.log(data)
//       setProfile(data)
//     } catch (error) {
//       setHasError({ error: true, message: error.message })
//   }
//     }
//     getData()
//   }, [])

//   useEffect(() => {
//     const getData = async () => {
//     try {
//       const { data } = await authAxios.get('/api/venues/')
//       // console.log(data)
//       setVenues(data)
//     } catch (error) {
//       setHasError({ error: true, message: error.message })
//   }
//     }
//     getData()
//   }, [])

//   const { userId } = useParams()

//     useEffect(() => {
//       const getSingleUser = async () => {
//         try {
//           const { data } = await axios.get(`/api/venues/${userId}`)
//           setUser(data)
//           console.log("User", data)
//         } catch (err) {
//             console.log(err)
//             setHasError({ error: true, message: err.message })
          
//         }
//       }
//       getSingleUser()
//     }, [userId])


// return (

//   <Container>
//     <div>
//       <h1>{user.username}</h1>
//       <h4>Open Venues Played: {user.reviews} (count)</h4>
//       <h4>Average Score: </h4>
//       <h4>Best score .... at....: </h4>
//     </div>
//   </Container>

)

}