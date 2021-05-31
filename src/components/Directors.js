import React from "react";
import { directors } from "../data";

function Directors() {

  const dirObjs = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <p>Movies:</p>
      <ul>
        {director.movies.map((movies) => (
          <li key={movies}>{movies}</li>
        ))}
      </ul>
    </div>
  ));
  return (
  <div>
   <h1>Directors Page</h1>
    { dirObjs }
  </div>
  );
}

export default Directors;