import React from "react";
import FunctionContextComponent from "./use_context/FunctionContextComponent";
import { ThemeProvider } from "./use_context/ThemeContext";
import Counter from "./use_state/Counter";
import MockApiCall from "./use_effect/MockApiCall";
import UseRefDemo from "./use_ref/UseRefDemo";
import UseCallbackDemo from "./use_callback/UseCallbackDemo";
import UseMemoDemo from "./use_memo/UseMemoDemo";

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
    // <ThemeProvider>
    //   <FunctionContextComponent />
    // </ThemeProvider>

    // <Counter/>

    // <MockApiCall/>

    // <UseRefDemo/>

    // <UseCallbackDemo/>

    <UseMemoDemo/>
  );
}

export default App;
