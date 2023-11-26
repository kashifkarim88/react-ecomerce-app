import { legacy_createStore as createStore } from "redux";
import combineReducers from '../reducers/RootReducer'

const store = createStore(
  combineReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;