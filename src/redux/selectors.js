import { createSelector } from "reselect";
export const todoListSelector = (state) => {
  return state.todoList;
};
export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const priortitiesSelector = (state) => state.filters.priority;

// trong cái createSelector, các tham số đầu là các selector mà remaining phụ thuộc, tham số sau là 1 callback với tham số truyền vào là
// các giá trị mà 2 cái đầu nó return
export const todosRemaining = createSelector(
  todoListSelector,
  statusSelector,
  searchTextSelector,
  priortitiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length > 0
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length > 0 ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
