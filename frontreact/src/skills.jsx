import React from 'react'

const skills = ({skill}) => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skill.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  )
}

export default skills
