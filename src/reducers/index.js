import { combineReducers } from "redux";
import data from "./ProductbReducer";
export default combineReducers({
  data: data,
  laoding: true
});
