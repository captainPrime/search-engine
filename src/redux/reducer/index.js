import { combineReducers } from "redux";
import { searchReducer, errorReducer, specificSearchReducer } from "./searchReducer";

const reducers = combineReducers({
  searchResults: searchReducer,
  error: errorReducer,
  specificSearchReducer: specificSearchReducer
});

export default reducers;
