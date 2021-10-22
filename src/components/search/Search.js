import "./Search.css";
import React from "react";
import SearchIcon from "../../assets/icon_search.png";

function Search({ searchQuery, onQuery }) {
  return (
    <div className="search-box">
      <img src={SearchIcon} alt="search" className="search-icon" />
      <input
        type="text"
        placeholder="&nbsp;Search.."
        value={searchQuery}
        className="search"
        onChange={(e) => onQuery(e.currentTarget.value)}
      ></input>
    </div>
  );
}

export default Search;
