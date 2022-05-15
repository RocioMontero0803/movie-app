import React from "react";
import "./App.css";
const Movie = ({movie}) => {
  return (
    <div className="grid">
    <h2 className="grid">Random Movie :</h2>
      <h3>{movie.title}</h3>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
    </div>
  );
};
export default Movie;