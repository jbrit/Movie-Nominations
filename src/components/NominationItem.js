import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movieActions";
import { Link } from "react-router-dom";

const NominationItem = ({ movie, removeMovie }) => {
  return (
    <li className="movie-item ">
      <img
        className="mr-3"
        style={{
          objectFit: "cover",
          height: "100px",
          width: "100px",
        }}
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://bitsofco.de/content/images/2018/12/broken-1.png"
        }
        alt="Movie Poster Name"
      />
      <div className="d-flex flex-column justify-content-center">
        <div className="mb-1">
          <span className="fw-600">{movie.Title}</span> ({movie.Year})
        </div>
        <div>
          <a
            href="#remove"
            className="text-danger d-inline-block mr-2"
            onClick={(e) => {
              e.preventDefault();
              removeMovie(movie);
            }}
          >
            Remove
          </a>
          <Link className="d-inline-block" to={`/movie/${movie.imdbID}`}>
            View Details
          </Link>
        </div>
      </div>
    </li>
  );
};
NominationItem.propTypes = {
  removeMovie: PropTypes.func.isRequired,
};
export default connect(null, { removeMovie })(NominationItem);
