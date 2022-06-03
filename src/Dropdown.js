import React, { useState } from "react";
import "./App.css";
const Dropdown = ({handleSubmit}) => {

const [searchState, setSearchState] = useState("");

function handleDropdownChange(event){
    const value = event.target.value
    setSearchState(value);
    console.log({event});
    };
    
  return (
    <div>
        <select onChange={handleDropdownChange} value={searchState}>
            <option value="Texas">TX</option>
            <option value="NewYork">NYC</option>
            <option value="Michigan">MI</option>
            <option value="Arizona">AZ</option>
            <option value="California">CA</option>
        </select>
        <button onClick={(event)=>handleSubmit(event, null, searchState)}>Search</button>
     
    </div>
  );
};
export default Dropdown;