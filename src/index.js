import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as serviceWorker from './serviceWorker';
/*first will import createStore from redux*/
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/* and also import Provider from react-redux*/
import { Provider } from "react-redux";

/*importing ProductReducer */
import ProductReducer from "./reducers/ProductReducer";

/*then i will create store and map with reducer*/
const store = createStore(ProductReducer, applyMiddleware(thunk)); // product reducer will import from reducer

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();