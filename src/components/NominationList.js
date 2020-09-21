import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movieActions";
import { Link } from "react-router-dom";

const NominationList = ({ nominations, removeMovie }) => {
  return (
    <>
      <div className="card-heading f-22 f-sm-24 f-md-28 fw-700">
        Nominations
      </div>
      <ul className="card-content p-0">
        {nominations.map((movie) => (
          <li key={movie.imdbID} className="d-flex align-items-stretch">
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
            <div className="w-100">
              <div>
                {movie.Title} ({movie.Year})
              </div>
              <div>
                <button
                  onClick={() => {
                    removeMovie(movie);
                  }}
                  className="btn btn-light border"
                >
                  Remove
                </button>
                <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
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
