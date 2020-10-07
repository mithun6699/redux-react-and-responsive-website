import { combineReducers } from "redux";
import courses from "./courseReducer";
// we can name anything since it is default export

const rootReducer = combineReducers({
  courses: courses,
});

export default rootReducer;
