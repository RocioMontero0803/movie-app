import React, { useEffect, useState } from "react";
import "./App.css";
import "./Movie";
import Movie from "./Movie";
const App = () => {
  const url =
 "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";
    //"https://api.themoviedb.org/3/movie/550?api_key=dd057765c3d89463c01a9781e9c772d3";
  const url2 = "";
  //"https://api.yelp.com/v3/businesses/search?location=NYC&categories=bars&open_now=true$limit=40&offset=80";
  //"https://api.yelp.com/v3/businesses/GIGb2f8CtnRzvrxuNHGwpNRuSh363YUugdyxPky0qcRFZS3hQMO5kCaVpkk5L8RAXiyrv8czrqSF6k-0JbY2FtdnR7mCFtFZjT8cDXONgVthGs0YoDJk2NZEP5tVYnYx";
    const [popular, setPopular] = useState([]);
    const [food, setFood] = useState([]);
  useEffect(() => {
    fetchPopular();
    fetchDinner();
  },[]);
const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

const fetchDinner = async () => {
  const data2 = await fetch(url2);
  const dinner = await data2.json();
  console.log(dinner);
  setFood(dinner.location);
};
return (
    <div className="App">
      <h1>Movies</h1>
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
        {/* {food.map((null) => {
          return <Dinner key={null} />;
        })} */}
      </div>
    </div>
  );
};
export default App;