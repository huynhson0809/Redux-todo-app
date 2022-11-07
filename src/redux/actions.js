export const addTodo = (payload) => {
  return {
    type: "todoList/addTodo",
    payload,
  };
};

export const setSearch = (text) => {
  return {
    type: "filters/setSearch",
    payload: text,
  };
};

export const setStatus = (status) => {
  return {
    type: "filters/setStatus",
    payload: status,
  };
};

export const setPriority = (prioriry) => {
  return {
    type: "filters/setPriority",
    payload: prioriry,
  };
};

export const toggleCheckedTodo = (id) => {
  return {
    type: "todoList/setCheckedTodo",
    payload: id,
  };
};
