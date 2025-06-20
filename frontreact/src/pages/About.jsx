import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to about page!!</p>
      <Link to='/State'>UserState</Link><br /><br />
      <Link to='/form'>Form</Link><br/>
      <Link to='/Effect'>Effect</Link>
    </div>
  )
}

export default About
