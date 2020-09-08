import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";
import NominationList from "./components/NominationList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container py-5">
          <SearchBox />
          <div className="row mt-5">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <MovieList />
            </div>
            <div className="col-12 col-md-6">
              <NominationList />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
