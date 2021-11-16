// ./src/App.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAstronauts } from "./actions/fetchAstronauts";
import {v4 as uuid} from 'uuid'

function App (props) {
  const handleOnClick = () => {
    props.fetchAstronauts();
  }

  const astronauts = () => {
    return props.astronauts.map((astro) => (
      <li key={uuid()}>{astro.name}</li>
    ))
  }

  return (
    <div>
      <button onClick={(event) => handleOnClick(event)}>fetch astros</button>
      {props.requesting ? <h2>Loading Astronauts...</h2> : astronauts()}
    </div>
  );
  
}

function mapDispatchToProps(dispatch) {
  return { fetchAstronauts: () => dispatch(fetchAstronauts()) };
}

function mapStateToProps(state) {
  return {
    astronauts: state.astronauts.astronauts,
    requesting: state.astronauts.requesting
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




