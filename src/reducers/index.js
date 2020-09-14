import { combineReducers } from "redux";
import AllReducer from "./AllReducer";

export default combineReducers({
  all: AllReducer,
});
