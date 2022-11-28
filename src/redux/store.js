import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { products ,oneProduct} from "./reducer";
import thunk from "redux-thunk";
const reducers = combineReducers({products,oneProduct});
const middleware = [thunk];
const initialState ={}
const store = createStore(reducers,initialState, applyMiddleware(...middleware));
export default store;
