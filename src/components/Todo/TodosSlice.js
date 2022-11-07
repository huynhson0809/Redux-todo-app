const initState = [
  { id: 1, name: "Listen to music", completed: false, priority: "Medium" },
  { id: 2, name: "Playing games", completed: true, priority: "Low" },
  { id: 3, name: "Reading books", completed: false, priority: "High" },
];

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/setCheckedTodo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todosReducer;
