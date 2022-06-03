import React, { useState } from "react";
import "./App.css";
const Search = ({handleSubmit, searchParam}) => {

const [searchTerm, setSearchTerm] = useState("");

function handleInputChange(event){
const value = event.target.value
setSearchTerm(value);
console.log({event});
};

  return (
    <div>
    <input onChange={handleInputChange} value={searchTerm} className = "searchBar" />
    <button onClick={(event)=>handleSubmit(event, searchTerm, null)}>Search</button>
    </div>
  );
};
export default Search;