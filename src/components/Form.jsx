import React from 'react'

function Form(props) {
  return (
    <form>
      <label htmlFor="select-category">Категория</label>
      <select name="select-category" id="select-category" onChange={(e) => props.onInputChange(e.target.value)} value={props.value} >
        <option value="spacetugs">Разгонные блоки</option>
        <option value="launchpads">Стартовые платформы</option>
        <option value="launchvehicles">Ракеты-носители</option>
      </select>
    </form>
  )
}

export default Form