import React, { useState } from "react";

function Patient() {
// const [age, setAge] = useState("24");
// const [hospital, setHospital] = useState("appolo");
// const [blood, setBlood] = useState("B+ve");
// const [height, setHeight] = useState("159");

const [patient, setPatient] = useState(
      {
        hospital: "appolo",
        age: "24",
        blood: "B+ve",
        height: "159"
      }
    );

    function updateHospital() {
      setPatient(previousState =>  {
        return {...previousState, hospital:"rajiv gandhi medical hospital"}
      })
    }

    console.log("current state: ", patient);
    

    return (
    <>
      <h1>Our Patient</h1>
      <p>hospital: {patient.hospital}</p>
      <p>age: {patient.age}</p>
      <p>blood group: {patient.blood}</p>
      <p>height: {patient.height}</p>
       <br />
      <button onClick={updateHospital} >change hospital</button>
    </>
  );
}

export default Patient;
