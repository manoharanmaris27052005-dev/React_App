import React from "react";
import Employee from "./Employee.jsx";

function Office() {
  const isOfficeOpened = true;

  // const name = "ganesh kumar";
  // const empId = "101";

  // const empInfo = {
  //   name: "ganesh kumar",
  //   empId: "101",
  // };

  // const showEmpInfo = empInfo.name !== undefined && empInfo.empId !== undefined;

  const empList = [
    {name: "ganesh", empId: "101"},
    {name: "siva", empId: "102"},
    {name: "aslam", empId: "103"}
  ]

 const numberList = [1, 2, 3, 4, 5, 6, 6];

  return (
    <>
      <h1>Who works in my office?</h1>
      {/* <Employee name = {name} empId = "101" emailId = "ganesh@gmail.com" /> */}

      {/* {
        showEmpInfo ? (
          <Employee empInfo={empInfo} /> // ternary operator
        ) : null // empty
      } */}

       {/* {
        showEmpInfo &&  <Employee empInfo={empInfo} />
       }
      {isOfficeOpened ? <h2>Office is open</h2> : <h2>Office is closed</h2>} */}


 
     {/* <ul>
       { empList.map((empInfo) => <li key={} >  <Employee empInfo={empInfo} /> </li>)} 
     </ul> */}
       
       {/* {numberList.map((e, index) => <p key={index} >{e}</p>)} */}

    </>
  );
}

export default Office;
