import React from "react";
import SearchBox from "./components/SearchBox";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container py-5">
          <SearchBox />
          <div className="row mt-5">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <div className="card p-3">
                <h6 className="mb-4"> Results for "ram"</h6>
                <ul>
                  <li className="mb-3">
                    Elt 1{" "}
                    <button className="btn btn-light border" disabled>
                      Nominate
                    </button>
                  </li>
                  <li className="mb-3">
                    Elt 2{" "}
                    <button className="btn btn-light border">Nominate</button>
                  </li>
                  <li className="mb-3">
                    Elt 3{" "}
                    <button className="btn btn-light border">Nominate</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card p-3">
                <h6 className="mb-4">Nominations</h6>
                <ul>
                  <li className="mb-3">
                    Elt 1{" "}
                    <button className="btn btn-light border">Remove</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
