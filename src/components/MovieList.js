import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { nominateMovie, getMovies } from "../actions/movieActions";

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    getMovies: PropTypes.func.isRequired,
    nominateMovie: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getMovies("hey");
  }

  render() {
    const { movies, nominations, nominateMovie } = this.props;
    return (
      <div className="card p-3">
        <h6 className="mb-4"> Results for "hey"</h6>
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID} className="mb-3">
              <img
                style={{
                  objectFit: "contain",
                  height: "100px",
                  width: "100px",
                }}
                src={movie.Poster}
                alt="Movie Poster Name"
              />
              {movie.Title} ({movie.Year})
              <button
                onClick={() => {
                  nominateMovie(movie);
                }}
                className="btn btn-light border"
                disabled={nominations.some(
                  (elt) => elt.imdbID === movie.imdbID
                )}
              >
                Nominate
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movie.movies,
  nominations: state.movie.nominations,
});

export default connect(mapStateToProps, { getMovies, nominateMovie })(
  MovieList
);
