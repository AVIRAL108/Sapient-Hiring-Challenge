import { combineReducers } from "redux";
import launchesReducer from "./launchesReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  launches : launchesReducer,
  loading  :  loadingReducer
 });