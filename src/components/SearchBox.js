import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
class SearchBox extends Component {
  state = {
    movieTitle: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    const { getMovies } = this.props;
    e.preventDefault();
    if (this.state.movieTitle) getMovies(this.state.movieTitle.trim());
  };
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="movieTitle">Movie Title</label>
              <input
                onChange={this.onChange}
                name="movieTitle"
                type="text"
                className="form-control"
                id="movieTitle"
                placeholder="Example input placeholder"
                autoFocus
              />
            </div>
            <button className="btn btn-light border" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

export default connect(null, { getMovies })(SearchBox);
