import React from 'react'
import './Temples.css'
function MyTemples(props){
  
  return (
    <div className={props.myClass}  style={{backgroundImage:`url(${props.image})` }} onClick={props.onExpandCard} >
      <h3>{props.name}</h3>
    </div>

  )
}
export default MyTemples;