import React from 'react'

function Employee(props) {
  
  // const { name, empId, } = props;   // object destructuring

  const { empInfo } = props;
  const { name, empId } = empInfo;


 
  const text = `Hai i am employee, my name is ${name} my emp id ${empId}`;

  return (
    <>
      <h2>{text}</h2>
    </>
  )
}

export default Employee