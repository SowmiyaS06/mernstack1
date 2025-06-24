import React from 'react'

const Welcome = (props) => {
  return (
    <div>
        <h1>Welcome {props.name}!</h1>
        <h2>{props.country}</h2>
    </div>
  )
}

export default Welcome
