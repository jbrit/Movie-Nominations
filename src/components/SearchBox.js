import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getMovies,
  clearMovies,
  setSearchparam,
  setIsSearching,
} from "../actions/movieActions";
import { useLocation, useHistory } from "react-router-dom";

const SearchBox = ({
  getMovies,
  clearMovies,
  setSearchparam,
  setIsSearching,
}) => {
  const [currentTitle, setCurrentTitle] = useState(""),
    location = useLocation(),
    [searchedTitle, setSearchedTitle] = useState(""),
    history = useHistory(),
    onChange = (e) => setCurrentTitle(e.target.value),
    handleSubmit = (e) => {
      e.preventDefault();
      setSearchedTitle(currentTitle);
      history.push(`/search/?s=${encodeURIComponent(currentTitle)}${`&page=`}`);
    };

  useEffect(() => {
    clearMovies();
    const searchParams = new URLSearchParams(location.search);
    const searchWord = searchParams.get("s") ?? "";
    const page = searchParams.get("page");
    setCurrentTitle(searchWord);
    setSearchedTitle(searchWord);
    setIsSearching(true);
    searchedTitle || setIsSearching(false);
    searchedTitle &&
      searchedTitle.trim().length !== 0 &&
      getMovies(searchedTitle.trim(), page);
    searchedTitle &&
      searchedTitle.trim().length !== 0 &&
      setSearchparam(searchedTitle);
    return () => {
      clearMovies();
    };
  }, [
    location,
    searchedTitle,
    getMovies,
    clearMovies,
    setSearchparam,
    setIsSearching,
  ]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex align-items-stretch">
        <input
          value={currentTitle}
          onChange={onChange}
          name="movieTitle"
          type="text"
          className="my-form-control"
          id="movieTitle"
          placeholder="Start Searching"
          autoFocus
        />
        <button className="jb-btn jb-btn-primary inline-form-btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

SearchBox.propTypes = {
  clearMovies: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  setSearchparam: PropTypes.func.isRequired,
};

export default connect(null, {
  getMovies,
  clearMovies,
  setSearchparam,
  setIsSearching,
})(SearchBox);
