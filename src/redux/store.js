import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import {
  products,
  oneProduct,
  login,
  signup,
  profile,
  token,
  checkLogin,
  userData,
  changePassword,
  uploadAvatar,
  cartProduct
} from "./reducer";
import thunk from "redux-thunk";
const reducers = combineReducers({
  products,
  oneProduct,
  login,
  signup,
  profile,
  token,
  checkLogin,
  userData,
  changePassword,
  uploadAvatar,
  cartProduct
});
const middleware = [thunk];
const userToken = localStorage.getItem("token");
const userLogin = JSON.parse(localStorage.getItem("login"));
const userDataa = (localStorage.getItem("user"));
const product = JSON.parse(localStorage.getItem("product"));
const initialState = {
  token: userToken,
  checkLogin: userLogin,
  userData: userDataa,
 cartProduct :product,
};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
