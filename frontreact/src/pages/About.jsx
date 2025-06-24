import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Hooks/UserContext.jsx' 
import {UserContext1} from '../Hooks/UserContext1.jsx' // Importing the created context

const About = () => {
  const name = useContext(UserContext);
  const user = useContext(UserContext1); // useContext is used to use the created context
  return (
    <div>
      <h1>Hi {name}</h1>
      <h1>
        Hi {user.name} you are {user.age} years old!
      </h1>
      <h1>About</h1>
      <p>Welcome to about page!!</p>
      <Link to='/State'>UserState</Link><br />
      <Link to='/form'>Form</Link><br/>
      <Link to='/Effect'>Effect</Link><br/>
      <Link to='/Reducer'>Reducer</Link>
    </div>
  )
}

export default About 
