import React from 'react'
import { useState } from 'react'

function FavoriteCar() {
    // let car = 'i20';
     
    //    swift 
    const[car, setCar] = useState("swift");  // this will return 2 properties 

  return (
    <>
      <h1>My favorite Car is {car}</h1>
      <button onClick={()=>{ setCar("nexon") }} >change fav car</button>
    </>
  )
}

export default FavoriteCar