import { useState } from "react";

const SearchBar = ({ onSearchChange }) => {
    const [search, setSearch] = useState('');

  const manageSearch = (e) => {
    const s = e.target.value.trim();
    setSearch(s);
    
  };

  const searchMovie = (e) => {
    e.preventDefault();
    if (search.length > 3) {
        onSearchChange(search)
    }
  }

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        name="search"
        value={search}
        onChange={manageSearch}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
       <button  onClick = {searchMovie} className="btn btn-outline-success" type="submit">Search</button>
         <button onClick ={()=> {setSearch('')}} className="btn btn-outline-info" type="reset">Reset</button>
    </form>
  );
};

export default SearchBar;
