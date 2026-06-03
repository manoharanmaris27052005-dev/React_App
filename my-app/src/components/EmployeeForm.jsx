import React, { useState } from "react";

function EmployeeForm() {


 
  // event - to read values from the input "onchange"

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");

   const [formInput, setFormInput] = useState({});

  //console.log("current state: ",name);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!!!!");
    //console.log("current state: ",name, age, email);
    console.log("current state: ", formInput);
  }

  function handleTheChange(e) {
 
  //  (e) => { setFormInput((previousState) => { return {...previousState, age: e.target.value}}) }

  //     age
  // email
  const name = e.target.name
  //     22
  // ganesh@gmail.com
  const value = e.target.value;

  setFormInput((preState) => {return { ...preState,  [name]:value  }})

  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="">
        Enter your name: <input type="text" name="name" onChange={handleTheChange}  />
      </label>
      <br /><br />
      <label htmlFor="">
        Enter your age: <input type="text" name="age" onChange={handleTheChange} />
      </label>
      <br /><br />
      <label htmlFor="">
        Enter your email: <input type="text" name="email" onChange={handleTheChange}  />
      </label>
      <br /><br />
      <input type="submit" value= "submit form"/>
    </form>
  );
}

export default EmployeeForm;
