import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
    const location=useLocation()
  return (
    <div>welcome {location.state.id} and welcome to home</div>
  )
}

export default Home 