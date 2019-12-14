import React from 'react'
import './Display.module.css'

const Display = (props) => {
  return (
      <div className="p-2 bd-highlight">
        <a href={props.link}>
          <h2>{props.evento} - ({props.data})</h2>
          <img src={props.image} alt="" width="100%" />
        </a>
    </div>
  )
}

export default Display