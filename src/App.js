import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/pages/SearchPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={SearchPage}></Route>
            <Route exact path="/search" component={SearchPage}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
