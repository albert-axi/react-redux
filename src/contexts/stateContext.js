import { useReducer, createContext } from "react";
import countReducer from '../reducers/countReducer';
import usersReducer from "../reducers/usersReducer";

export const StateContext = createContext()

export const StateContextProvider = props => {
  const [count, countDispatch] = useReducer(countReducer, 0)
  const [users, usersDispatch] = useReducer(usersReducer, [])

  return (
    <StateContext.Provider value={{ count, countDispatch, users, usersDispatch }}>
      {props.children}
    </StateContext.Provider>
  )
}