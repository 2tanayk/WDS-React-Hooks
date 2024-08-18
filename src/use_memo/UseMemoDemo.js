import React, { useState, useMemo, useEffect } from "react";

function UseMemoDemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // we memoize the value, we recompute it ONLY if the number changes
  // so the slowFunction does not unnecessarily run on every render

  //but we should be careful in using this as this has a memory overhead
  // so do not memoize every thing
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  // another use case, we don't want a new object to be created
  // on every render
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  // only will be called when value of dark is changed
  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default UseMemoDemo;

// simulates a really slow long running function, for eg. an API call
function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
