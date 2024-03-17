import React from 'react'

const ColorInput = ({ setColor, setBoxText }) => {
  return (
    <div className='colorInput'>
      <input type="text" name="" id="" placeholder='Add color name'
        onChange={(e) => {
          setColor(`${e.target.value}`)
          setBoxText(e.target.value)
        }} autoFocus />
    </div>
  )
}

export default ColorInput
