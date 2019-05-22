import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import clientReducer from "./reducers/clientReducer";

const store = createStore(
  clientReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
