import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movieActions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
        <div className="d-flex align-items-stretch flex-wrap">
          <a
            href={"/remove/" + movie.Title.split(" ").join("")}
            className="link-danger d-inline-flex align-items-center mr-2 mr-md-3"
            onClick={(e) => {
              e.preventDefault();
              removeMovie(movie);
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "1rem",
              }}
              className="mr-2"
              icon={faTrash}
            />
            Remove
          </a>
          <Link
            className="link-primary d-inline-flex align-items-center"
            to={`/movie/${movie.imdbID}`}
          >
            View Details
            <FontAwesomeIcon
              style={{
                fontSize: "1rem",
              }}
              className="ml-2"
              icon={faChevronRight}
            />
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
