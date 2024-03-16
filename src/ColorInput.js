import React from 'react'

const ColorInput = ({count,setCount}) => {
  return (
    <div>
        <button onClick={()=>setCount(count-1)} >decrease</button>      
        <button onClick={()=>setCount(count+1)} >increase</button>      
    </div>
  )
}

export default ColorInput
