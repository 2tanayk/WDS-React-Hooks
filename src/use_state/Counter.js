import React, { useState } from "react";

function Counter() {
  // useState always returns an array consisting of the state and the fn. to update the state 
  
  // the initial value or expression assigned to useState will run EVERY SINGLE RENDER so in case you have some
  // complex computation to do, use the one mentioned below
  const [count, setCount] = useState(0)

// the initialization will run only once
//   const [count, setCount] = useState(() => {
//     console.log('run function')
//     return 4;
//   })

  function decrementCount(){
    // setCount(count-1)
    //or
    //the below one is more apt if we need the value of previous state, using the above one in
    //the aforementioned use case might give incorrect results
    setCount(prevCount => prevCount -1)
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default Counter;
