import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { nominateMovie } from "../actions/movieActions";

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    nominateMovie: PropTypes.func.isRequired,
  };

  componentWillMount() {}

  render() {
    const { nominations, nominateMovie } = this.props;
    return (
      <div className="card p-3">
        <h6 className="mb-4">Nominations</h6>
        <ul>
          {nominations.map((movie) => (
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
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations,
});

export default connect(mapStateToProps, { nominateMovie })(MovieList);
