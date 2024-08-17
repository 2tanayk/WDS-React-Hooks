import React, { useState, useRef, useEffect } from "react";

function UseRefDemo() {
  const [name, setName] = useState("");
  // a ref is very similar to state, it persists values between renders but
  // a ref does not cause the component to re-render unlike state, so for eg. we can
  // use this to count the no. of times our component renders
  const renderCount = useRef(1);

  // we can also hold a reference to our components using the ref attribute just like in vanilla web dev
  const inputRef = useRef();

  // we can also use this to reference the previous value of our state
  const prevName = useRef("");

  useEffect(() => {
    console.log("render");
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>Component rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default UseRefDemo;
