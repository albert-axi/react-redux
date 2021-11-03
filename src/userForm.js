import { useContext, useRef } from "react"
import { StateContext } from "./contexts/stateContext"

const UserForm = () => {
  const { usersDispatch } = useContext(StateContext)
  const firstNameRef = useRef()
  const countRef = useRef(0)

  const incrementCountRef = () => {
    countRef.current = countRef.current + 1
    console.log(countRef.current)
  }

  const addUser = () => {
    usersDispatch({
      type: 'add_user',
      user: {
        name: firstNameRef.current.value
      }
    })
  }
  
  
  return (
    <div>
      
      <input id="firstName" ref = {firstNameRef} type="text" placeholder="first name"></input><br/>
      <button onClick={ addUser }>Add User</button><br />
      {countRef.current}
      <button onClick={ incrementCountRef }>increment count ref</button>
    </div>

  
  )
}

export default UserForm