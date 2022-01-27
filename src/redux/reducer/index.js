import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";

const reducers = combineReducers({
  searchResults: searchReducer,
});

export default reducers;
