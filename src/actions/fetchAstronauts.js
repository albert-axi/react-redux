// export function fetchAstronauts() {
//   const astronauts = [
//     { name: "Neil Armstrong", craft: "Apollo 11" },
//     { name: "Buzz Aldrin", craft: "Apollo 11" },
//     { name: "Michael Collins", craft: "Apollo 11" },
//   ];
//   return {
//     type: "ADD_ASTRONAUTS",
//     astronauts,
//   };
// }

// ./src/actions/fetchAstronauts.js
export function fetchAstronauts() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_ASTRONAUTS_REQUEST" });
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then(({people: astronauts}) => dispatch({ type: "ADD_ASTRONAUTS", astronauts }));
  };
}