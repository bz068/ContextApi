import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = (props) => {
  const [main, setMain] = useState([
    {
      color: "Red",
      id: "1",
    },
    {
      color: "Green",
      id: "2",
    },
  ]);

  return (
    <MainContext.Provider value={[main]}>{props.children}</MainContext.Provider>
  );
};

// USE CONTEXT
// IMPORT MAIN CONTEXT - WHERE NEEDED.
// const [mainList] = useContext(MainContext);

// APP.JS - IMPORT MainProvider
{
  /* <MainProvider>
<div className="App">
  <Header />
</div>
</MainProvider> */
}
