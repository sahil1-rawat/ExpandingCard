import React, { useState } from 'react';
import MyTemples from './MyTemples';
import './Cards.css';

const Cards = (props) => {
    const [activeDiv,setActiveDiv]=useState(0);
    
    const expandCard=(index)=>{
        setActiveDiv(index);
    }
  return (
    <div className='container'>
        {
            props.Temples.map((Temples,index)=>(
                <MyTemples key={Temples.id}  image={Temples.image} name={Temples.name} extra={Temples.extra} onExpandCard={()=>expandCard(index)} myClass={`card ${activeDiv===index?'active':''}`} />
            ))
        }
    </div>
  );
};

export default Cards;
