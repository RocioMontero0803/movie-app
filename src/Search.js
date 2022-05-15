import React, { useState } from "react";
import "./App.css";
const Search = (props) => {

const [searchTerm, setSearchTerm] = useState("");

function handleInputChange(event){
const value = event.target.value
setSearchTerm(value);
console.log({event});
};

  return (
    <div>
    <input onChange={handleInputChange} value={searchTerm} className = "searchBar" />
    </div>
  );
};
export default Search;