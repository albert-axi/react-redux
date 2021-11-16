// ./src/App.js

import React, { Component } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchAstronauts } from "./actions/fetchAstronauts";
import {v4 as uuid} from 'uuid'

function App() {
  const astronauts = useSelector(state => state.astronauts.astronauts)
  const requesting = useSelector(state => state.astronauts.requesting)
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch({ type: "START_ADDING_ASTRONAUTS_REQUEST" });

    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then(({people: astronauts}) => dispatch({ type: "ADD_ASTRONAUTS", astronauts }));
  }

  const renderAstronauts = () => {
    return astronauts.map((astro) => (
      <li key={uuid()}>{astro.name}</li>
    ))
  }

  return (
    <div>
      <button onClick={(event) => handleOnClick(event)}>fetch astros</button>
      {requesting ? <h2>Loading Astronauts...</h2> : renderAstronauts()}
    </div>
  );
  
}

// function mapDispatchToProps(dispatch) {
//   return { fetchAstronauts: () => dispatch(fetchAstronauts()) };
// }

// function mapStateToProps(state) {
//   return {
//     astronauts: state.astronauts.astronauts,
//     requesting: state.astronauts.requesting
//   };
// }

// export default connect(mapStateToProps)(App);
export default App




