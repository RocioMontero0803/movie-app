import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import "./Movie";
import Dinner from "./Dinner";
import Movie from "./Movie";
function App() {
  const url =
 "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";
    //"https://api.themoviedb.org/3/movie/550?api_key=dd057765c3d89463c01a9781e9c772d3";
  // const url2 = 
  // `https://api.yelp.com/v3/businesses/search`
  //"https://api.yelp.com/v3/businesses/GIGb2f8CtnRzvrxuNHGwpNRuSh363YUugdyxPky0qcRFZS3hQMO5kCaVpkk5L8RAXiyrv8czrqSF6k-0JbY2FtdnR7mCFtFZjT8cDXONgVthGs0YoDJk2NZEP5tVYnYx";
  const searchParam = 'rice'
  const location = {
    latitude: null,
    longitude: null
  }
  
  const [popular, setPopular] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

    // const [food, setFood] = useState([]);
    
    const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
    };
  
  // const fetchDinner = async () => {
  //   const data2 = await fetch(url2,{
  //     method: "GET",
  //     headers: {
  //      //this is where the bearer token goes
  //     //  'Access-Control-Allow-Origin':'*',
  //       'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
  //   }
  // })
  //   const dinner = await data2.json();
  //   console.log(dinner);
  //   setFood(dinner.location);
  // };
  const callYelpApiWithCredentials = useCallback(async (searchParam, location) => {
    const requestUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'
   try {
     const response = await fetch(`${requestUrl}?term=${searchParam}&location=NYC`, {
       headers: {
         'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
       }
   })
   const restaurantsResponse = response.json()
   console.log(restaurantsResponse)
   setRestaurants(restaurantsResponse)
  
   } catch (error) {
     console.error(error)
   }
})

function formatLocationToUrlEncode(locationObject) {
  const objectKeys = Object.keys(locationObject)
  objectKeys.map((key, index) => {
     if (locationObject[key]) return `${key}=${locationObject[key]}`
  })

}

    useEffect(() => {
    fetchPopular();
    callYelpApiWithCredentials(searchParam, location);
    // fetchDinner();
  },[]);

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
      {/* <div>
           
      {restaurants.buisnesses.map(businesses => {
          return <Dinner key={businesses.name}/>
        })}

      </div> */}
    </div>
  );
};
export default App;