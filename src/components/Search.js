import React, { useState } from "react";

function Search({ setSearch }) {

  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(input);
  }

  function handleInputChange(e) {
    setInput(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
