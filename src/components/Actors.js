import React from "react";
import { actors } from "../data";

function Actors() {

  const actorObjs = actors.map((actor) => (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movies) => (
          <li key={movies}>{movies}</li>
        ))}
      </ul>
    </div>
  ));


  return (
  <div>
   <h1>Actors Page</h1>
   { actorObjs}
  </div>
  );
}

export default Actors;