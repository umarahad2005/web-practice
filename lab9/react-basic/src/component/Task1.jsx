import React from 'react'
import '../Style/Task1.css'

const task1 = (props) => {
  return (
    <div>
        <div className='legend'> this is my card UI
        <h1>Name: {props.name}</h1>
        <h2>age : {props.age}</h2>
        <h2>sap : {props.sap}</h2>
        </div>
    </div>
  )
}

export default task1
