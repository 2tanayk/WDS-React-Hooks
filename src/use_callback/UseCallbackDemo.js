import React, { useState, useCallback } from "react";
import List from "./List";

function UseCallbackDemo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // we want our function to change/recreated only when number changes 
  // not when the theme is toggled
  // so we use useCallback (it returns us our function)
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallbackDemo;
