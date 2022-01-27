import { combineReducers } from "redux";
import { searchReducer, errorReducer } from "./searchReducer";

const reducers = combineReducers({
  searchResults: searchReducer,
  error: errorReducer
});

export default reducers;
