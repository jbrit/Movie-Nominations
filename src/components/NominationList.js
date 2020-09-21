import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movieActions";
import { Link } from "react-router-dom";

const NominationList = ({ nominations, removeMovie }) => {
  return (
    <div className="card p-3">
      <h6 className="mb-4 f-22 f-sm-24 f-md-28 fw-700">Nominations</h6>
      <ul>
        {nominations.map((movie) => (
          <li key={movie.imdbID} className="mb-3">
            <img
              style={{
                objectFit: "contain",
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
            {movie.Title} ({movie.Year})
            <button
              onClick={() => {
                removeMovie(movie);
              }}
              className="btn btn-light border"
            >
              Remove
            </button>
            <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

NominationList.propTypes = {
  nominations: PropTypes.array.isRequired,
  removeMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations,
});

export default connect(mapStateToProps, { removeMovie })(NominationList);
