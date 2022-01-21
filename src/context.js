import React, {createContext, useEffect, useState} from "react";

const Context = createContext({});

const Provider = (props) => {
   const contextValue = {};
   return <Context.Provider value={contextValue} />
}

const useCxt = () => React.useContext(Context);

export { Provider, useCxt };