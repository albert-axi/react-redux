import './App.css';
import { connect } from "react-redux"

function App({count, increment, decrement}) {
  return (
    <div className="App">
      {count}
      <br/>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count,
  click: state.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'increment' }),
  decrement: () => dispatch({ type: 'decrement' }) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
