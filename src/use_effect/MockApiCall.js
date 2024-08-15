import React, { useState, useEffect } from "react";

function MockApiCall() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // the below will be called everytime our component renders
  useEffect(() => {
    console.log("render");
  });

  const handleResize = () => setWindowWidth(window.innerWidth);

  // runs only when component mounts
  useEffect(() => {
    console.log("on mount");

    window.addEventListener("resize", handleResize);

    // the return statement runs to "cleanup", so everytime an useEffect finishes(or a new 
    // invocation is about to start) this gets run
    
    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, []);

  // runs only when resource type changes
  useEffect(() => {
    console.log("resource type changed");

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      {/* <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
      <div>{windowWidth}</div>
    </>
  );
}

export default MockApiCall;
