import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import products from "./products";
import cart from "./cart";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  products,
  cart
});

const enhancer = compose(
  applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    thunk,
    // typeof window === "object" &&
    //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    //     // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    //   })
    // ... other middlewares ...
  )
);
export default createStore(rootReducer, enhancer);
