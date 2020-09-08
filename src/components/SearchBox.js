import React, { Component } from "react";
class SearchBox extends Component {
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

export default SearchBox;
