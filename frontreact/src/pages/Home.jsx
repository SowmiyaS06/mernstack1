import React from 'react'
import Welcome from '../Welcome.jsx'
import Skills from '../skills.jsx'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <p>This is the main landing page of our application.</p>
       <Welcome name='Sowmiya' country='Tirupur'/> 
      <h1>hiii</h1>
      <Skills skill={['React','Node','Express']}/>
    </div>
  )
}

export default Home
