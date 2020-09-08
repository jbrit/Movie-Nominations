import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
class SearchBox extends Component {
  componentWillMount() {
    console.log("I will mount");
    this.props.getMovies("hey");
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="movieTitle">Movie Title</label>
              <input
                type="text"
                className="form-control"
                id="movieTitle"
                placeholder="Example input placeholder"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movie.movies,
});

export default connect(mapStateToProps, { getMovies })(SearchBox);
