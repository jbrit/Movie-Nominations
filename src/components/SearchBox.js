import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import { useLocation, useHistory } from "react-router-dom";

const SearchBox = ({ getMovies }) => {
  const [currentTitle, setCurrentTitle] = useState(""),
    location = useLocation(),
    [searchedTitle, setSearchedTitle] = useState(""),
    history = useHistory(),
    onChange = (e) => setCurrentTitle(e.target.value),
    handleSubmit = (e) => {
      e.preventDefault();
      setSearchedTitle(currentTitle);
      history.push(`/search/?s=${currentTitle}${`&page=`}`);
    };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchWord = searchParams.get("s");
    const page = searchParams.get("page");
    setCurrentTitle(searchWord);
    setSearchedTitle(searchWord);
    searchedTitle && getMovies(searchedTitle.trim(), page);
  }, [location, searchedTitle, getMovies]);
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="movieTitle">Movie Title</label>
            <input
              value={currentTitle}
              onChange={onChange}
              name="movieTitle"
              type="text"
              className="form-control"
              id="movieTitle"
              placeholder="Example input placeholder"
              autoFocus
            />
          </div>
          <button className="btn btn-light border" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

export default connect(null, { getMovies })(SearchBox);
