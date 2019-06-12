import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { getAllProducts } from "./actions";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
