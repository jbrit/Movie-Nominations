import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { nominateMovie, getMovies } from "../actions/movieActions";

const MovieList = ({
  movies,
  nominations,
  search_param,
  nominateMovie,
  loading,
  response,
  error,
  notRequested,
}) => {
  return (
    <div className="card p-3">
      {search_param ? (
        <h6 className="mb-4"> Results for "{search_param}"</h6>
      ) : (
        ""
      )}
      <ul>
        {/* If not title, if loading, if notloaded, if response not true, else result */}
        {!search_param
          ? "Type to search"
          : loading
          ? "Loading..."
          : notRequested
          ? "Couldn't Search Successfully!"
          : response === "False"
          ? error
          : ""}
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
  error: PropTypes.string,
  response: PropTypes.string,
  notRequested: PropTypes.bool,
  search_param: PropTypes.string.isRequired,
  getMovies: PropTypes.func.isRequired,
  nominateMovie: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movie.search_result.movies,
  nominations: state.movie.nominations,
  error: state.movie.search_result.Error,
  response: state.movie.search_result.Response,
  notRequested: state.movie.search_result.notRequested,
  search_param: state.movie.search_param,
  loading: state.movie.isSearching,
});

export default connect(mapStateToProps, { getMovies, nominateMovie })(
  MovieList
);
