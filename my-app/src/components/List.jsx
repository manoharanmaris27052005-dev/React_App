import React, { useState } from 'react'

function List() {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(1)

    function addProduct() {
       const productName = `Product` + count;
       setList((prevState) => { return [...prevState, productName]})
       setCount((prevState) => { return prevState + 1})
    }
    console.log("current state: ", list);
    

  return (
    <>
    <h1>List</h1>
    <button onClick={addProduct} >add product</button>
     <ul>{ 
     list.map((element, index) => <li key={index} >{element}</li>)
        }
        
     </ul>
    </>
  )
}

export default List