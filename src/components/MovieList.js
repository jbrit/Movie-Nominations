import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { nominateMovie, getMovies } from "../actions/movieActions";

const MovieList = ({ movies, nominations, search_param, nominateMovie }) => {
  return (
    <div className="card p-3">
      <h6 className="mb-4"> Results for "{search_param}"</h6>
      <ul>
        {movies.map((movie) => (
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
                nominateMovie(movie);
              }}
              className="btn btn-light border"
              disabled={nominations.some((elt) => elt.imdbID === movie.imdbID)}
            >
              Nominate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  nominations: PropTypes.array.isRequired,
  search_param: PropTypes.string.isRequired,
  getMovies: PropTypes.func.isRequired,
  nominateMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movie.search_result.movies,
  nominations: state.movie.nominations,
  search_param: state.movie.search_param,
});

export default connect(mapStateToProps, { getMovies, nominateMovie })(
  MovieList
);
