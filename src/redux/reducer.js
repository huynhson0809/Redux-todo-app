import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FiltersSlice";
import todosReducer from "../components/Todo/TodosSlice";
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todosReducer,
});

export default rootReducer;
