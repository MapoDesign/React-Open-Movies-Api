import { useState } from "react";

const SearchBar = ({ onSearchChange }) => {
  const manageSearch = ({ target }) => {
    const s = target.value.trim();
    setSearch(s);
    if (s.length > 3) {
      onSearchChange(s);
    }
  };

  const [search, setSearch] = useState("");

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
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
