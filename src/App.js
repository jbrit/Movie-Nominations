import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/pages/SearchPage";
import MoviePage from "./components/pages/MoviePage";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="container-fluid main-container px-3 px-md-4 px-lg-5">
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/search" component={SearchPage}></Route>
              <Route exact path="/movie/:id" component={MoviePage}></Route>
              <Route path="/" component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
