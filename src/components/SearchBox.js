import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";

const SearchBox = ({ getMovies }) => {
  const [title, setTitle] = useState(""),
    onChange = (e) => setTitle(e.target.value),
    handleSubmit = (e) => {
      e.preventDefault();
      title && getMovies(title.trim());
    };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="movieTitle">Movie Title</label>
            <input
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
