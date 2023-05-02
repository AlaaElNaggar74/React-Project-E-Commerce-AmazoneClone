import React,{ createContext,useContext, useReducer } from "react";

export let stateContext = createContext();

export let StateProvider = ({ reducer,initialState,children }) => (
  <stateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </stateContext.Provider>
);

export let useStateValue=()=> useContext(stateContext)
