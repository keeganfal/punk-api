import React from "react";
import "./SearchBar.scss"

const SearchBar = ({getBeers, filterResults}) => {

  // const [searchTerm, setSearchTerm] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    // getBeers()
    filterResults(event.target[0].value)
  }

  return (
 
    <nav className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="beer-name">Beer name: </label>
        <input type="text" name="beer-name" id="beer-name"/>

        <button type="submit" value="Submit" id="submit-btn">GET BEERS</button>
      </form>
    </nav>

  );
};

export default SearchBar;
