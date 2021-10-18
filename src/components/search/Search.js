import "./Search.css";
import React from "react";

function Search({searchQuery,onQuery}) {
  return (
    <input type="text" 
    placeholder="&nbsp;Search.."
    value={searchQuery}
     className="search"
     onChange={(e) => onQuery(e.currentTarget.value)}
     >
     </input>
  );
}

export default Search;
