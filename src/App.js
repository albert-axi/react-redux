import './App.css';
// import { connect } from "react-redux"
// import {actions, createAction} from "./actions/actionCreators"
import Authors from './components/authors'
import Books from './components/books';
import BookForm from './components/bookForm';

function App(props) {
  
  return (
    <div className="App">
      <BookForm />
      <Books />
      <Authors />
    </div>
  );
}

export default App;
