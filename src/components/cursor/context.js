import * as React from "react";
import { createContext, useReducer, useContext } from "react";

let initialState = {
  currentCursor: "",
};

const CursorStateContext = createContext(initialState);
const CursorDispatchContext = createContext();

const cursorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CURSOR": {
      return {
        ...state,
        currentCursor: action.cursor,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const GlobalCursorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cursorReducer, {
    currentCursor: "",
  });

  return (
    <CursorDispatchContext.Provider value={dispatch}>
      <CursorStateContext.Provider value={state}>
        {children}
      </CursorStateContext.Provider>
    </CursorDispatchContext.Provider>
  );
};

export const useCursorStateContext = () => useContext(CursorStateContext);
export const useCursorDispatchContext = () => useContext(CursorDispatchContext);
