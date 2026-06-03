import React, { useEffect, useState } from "react";

function StopWatch() {
    const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Screen refreshed");
  //  checkCount();
   // setCount(1);
//    setTimeout(()=>{
//     setCount((preState) => { return preState + 1 })
//    }, 2000)
  });

  function checkCount() {
      if(count > 10) {
        setCount(1);
      }
  }


  function updateCount() {
    setCount((previousCount) => {
      return previousCount + 1;
    });
  }

  return (
    <>
      <h1>StopWatch</h1>
      <h2>I have Rendered {count} times</h2>
      <button onClick={updateCount}> Increase Count </button>
    </>
  );
}

export default StopWatch;
