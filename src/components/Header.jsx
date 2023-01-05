import React from 'react'
import Form from './Form'

function Header(props) {
  return (
    <header>
          <Form value={props.value} onInputChange={props.onInputChange} />
          <h2 className="title glass">{props.name}</h2>
    </header>
  )
}

export default Header