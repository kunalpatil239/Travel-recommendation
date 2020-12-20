import React, { useState } from "react";
import "./styles.css";

var placesDb = {
  Maharashtra: [
    { name: "Raigadh", rating: "4.8/5" },
    { name: "Mahabaleshwar", rating: "4/5" }
  ],
  Gujrat: [
    { name: "Baroda", rating: "4.6/5" },
    { name: "Aanand", rating: "4.5/5" }
  ],
  Kerala: [
    { name: "Kozhikode", rating: "5/5" },
    { name: "Trivandrum", rating: "4.5/5" }
  ]
};
var listOfStates = Object.keys(placesDb);

export default function App() {
  var [selectedState, setState] = useState("Maharashtra");
  function onClickHandler(selectedState) {
    setState(selectedState);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="beach">
          {" "}
          ⛱️
        </span>
        MustVisitPlaces
      </h1>
      <hr />
      <h2>Best Holiday destinations in India.</h2>
      <h3> Choose the states to know my favourite places.</h3>
      <div>
        {listOfStates.map((state) => {
          return (
            <button className="buttons" onClick={() => onClickHandler(state)}>
              {state}
            </button>
          );
        })}
      </div>
      <hr />
      <div className="lowerArea">
        <ul>
          {placesDb[selectedState].map((place) => (
            <li className="visit" key={place.name}>
              <div className="name">{place.name} </div>
              <div>{place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
