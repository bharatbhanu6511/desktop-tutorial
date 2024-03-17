import React from 'react'

const ColorBox = ({color,boxText}) => {
  // const bg=document.getElementById('colorBox').style
  return (
    <div id='colorBox' style={{backgroundColor:`${color}`}}>
        <p style={{color:color==='black' && color!=='white'?'white':'black'}} >{boxText==='white'?'white':boxText}</p>      
    </div>
  )
}

export default ColorBox
