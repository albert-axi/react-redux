import './App.css';
import { useSelector, useDispatch } from "react-redux"

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const increment = () => dispatch({ type: "increment" })
  const decrement = () => dispatch({ type: "decrement" })
  
  return (
    <div className="App">
      {count}
      <br/>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
