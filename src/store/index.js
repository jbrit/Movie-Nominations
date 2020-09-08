import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [applyMiddleware(thunk)];
if (window.__REDUX_DEVTOOLS_EXTENSION__)
  middleware.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default createStore(rootReducer, compose(...middleware));
