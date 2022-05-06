import React, { useEffect, useState } from "react";
import "./App.css";
import "./Movie";
import Dinner from "./Dinner";
import Movie from "./Movie";
import Button from "./Button";
function App() {
  console.log("hmm");
  const url =
 "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";

 const searchParam = 'rice'
  
 const location = {
    latitude: null,
    longitude: null
  }
  
  const [restaurants, setRestaurants] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
    
    const fetchPopular = async () => {
      console.log("hello");
      const data = await fetch(url);
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
    };

    useEffect(() => {
      console.log("bye")
      const callYelpApiWithCredentials = async (searchParam, location) => {
        const requestUrl = 'http://localhost:4000/https://api.yelp.com/v3/businesses/search'
       try {
         const response = await fetch(`${requestUrl}?term=${searchParam}&location=NYC`, {
           headers: {
             'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
           }
       })
       const restaurantsResponse = await response.json()
       console.log(restaurantsResponse)
       setIsLoading(false) 
       setIsSuccess(true)
       setRestaurants(restaurantsResponse.businesses)
      
       } catch (error) {
         setIsLoading(false)
         setIsError(true)
         setError(error)
         console.error(error)
       }
    }
      fetchPopular(popular);
      callYelpApiWithCredentials(searchParam, location);
  }, []);


  function handleShuffleArray() {
    const randomDinner = [...restaurants].sort(() => Math.random() - Math.random())
    setRestaurants(randomDinner)
    
    const randomMovie = [...popular].sort(() => Math.random() - Math.random())
    setPopular(randomMovie)
  }


return (
  <div className="App">
    <h1>Click button to get started</h1>
    <button onClick={handleShuffleArray}>Randomize</button>
    <p>Once you click the button it gives you options for your dinner movie night</p>
    {isSuccess && !isLoading && !isError && (<div className="popular-movies">
      {popular.map((movie, index) => { 
        console.log('movie')
        console.log('restaurant', restaurants[index])
       console.log('hmm', restaurants[index]?.name)
        return (
         <div> 
           <Movie key={movie.id} movie={movie} /> 
           <h2> Random Restaurant : {restaurants[index]?.name}</h2>
           <br></br>
        </div>
        );
      })}
    </div>)}
    {!isSuccess && isLoading && !isError && (
      <div>
        <h1>...LOADING</h1>
      </div>
    ) }
     {!isSuccess && !isLoading && isError && (
      <div>
        <h1>ERROR</h1>
        <p>{error}</p>
      </div>
    ) }
    <div>

    </div>
  </div>
);
};

export default App;