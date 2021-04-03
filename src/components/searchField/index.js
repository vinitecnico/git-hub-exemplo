import React, { useState, useRef } from "react";
import searchIcon from "../../assets/ic_Search.png";
import history from "../../history";
import "./styles.scss";

const SearchField = ({ ...props }) => {
  let username = null
  if(history.location.pathname.includes('/user/')) {
    const list = history.location.pathname.split('/')
    username = list[list.length - 1]
  }
  const buttonRef = useRef(null);
  const [term, setTerm] = useState(username);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") buttonRef.current && buttonRef.current.click();
  };

  const handleSearch = () => {
    history.push(`/user/${encodeURIComponent(term)}`);
  };

  return (
    <section className="search-field">
      <input
        className="search-field-input"
        placeholder="Repository name"
        type="text"
        value={term}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        {...props}
      />
      <button
        ref={buttonRef}
        onClick={handleSearch}
        className="search-field-button"
      >
        <img src={searchIcon} alt="Repository name" title="Repository name" />
      </button>
    </section>
  );
};

export default SearchField;
