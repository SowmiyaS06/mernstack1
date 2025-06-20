import React from 'react'
import Welcome from '../Welcome.jsx'
import Skills from '../skills.jsx'

const Service = () => {
  return (
    <div>
      <h1>Service</h1>
      <p>Welcome to service page!!</p>
       <Welcome name='Sowmiya' country='Tirupur'/> 
      <h1>hiii</h1>
      <Skills skill={['React','Node','Express']}/>
    </div>
  )
}

export default Service
