import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import Paginator from "./Paginator";
import MovieItem from "./MovieItem";

const MovieList = ({
  movies,
  nominations,
  search_param,

  loading,
  response,
  error,
  notRequested,
}) => {
  return (
    <>
      <div className="card-heading f-22 f-sm-24 f-md-28 fw-700">
        {!search_param
          ? "Type to search"
          : loading
          ? "Loading..."
          : notRequested
          ? "Couldn't Search Successfully!"
          : response === "False"
          ? error
          : `Search Results for: “${search_param}”`}
      </div>

      <ul className="card-content p-0">
        {/* If not title, if loading, if notloaded, if response not true, else result */}
        {movies.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            nominations={nominations}
          />
        ))}
      </ul>
      <Paginator />
    </>
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

export default connect(mapStateToProps, { getMovies })(MovieList);
