import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movieActions";

class NominationList extends Component {
  static propTypes = {
    nominations: PropTypes.array.isRequired,
    removeMovie: PropTypes.func.isRequired,
  };

  componentWillMount() {}

  render() {
    const { nominations, removeMovie } = this.props;
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

export default connect(mapStateToProps, { removeMovie })(NominationList);
