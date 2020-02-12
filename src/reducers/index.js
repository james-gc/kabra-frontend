import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";

const rootReducer = combineReducers({
  products,
  cart

});




const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  });

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export default createStore(rootReducer, enhancer);
