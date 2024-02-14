import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

//this the context we create
// export const ThemeContext = React.createContext();

function App() {
  //this is the state
  // const [darkTheme, setDarkTheme] = useState(true);

  // function toggleTheme() {
  //   setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  // }

  // return (
  //   <>
  //     {/* the value is global state accessible to all its descendants */}
  //     <ThemeContext.Provider value={darkTheme}>
  //       <button onClick={toggleTheme}>Toggle Theme</button>
  //       <FunctionContextComponent />
  //     </ThemeContext.Provider>
  //   </>
  // );

  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}

export default App;
