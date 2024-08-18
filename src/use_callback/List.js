import React, { useState, useEffect } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  // this useEffect runs only when getItems function is to be changed
  // but the getItems function unnecessarily changes even when we toggle the theme 
  // which causes a re-render
  //thats where we need to use useCallback hook
  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

export default List;
