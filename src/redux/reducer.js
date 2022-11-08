import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/filtersSlice";
import todosReducer from "../components/Todo/todosSlice";
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todosReducer,
});

export default rootReducer;
