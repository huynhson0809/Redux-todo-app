// const initState = [
//   { id: 1, name: "Listen to music", completed: false, priority: "Medium" },
//   { id: 2, name: "Playing games", completed: true, priority: "Low" },
//   { id: 3, name: "Reading books", completed: false, priority: "High" },
// ];

// const todosReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/setCheckedTodo":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todosReducer;

import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Listen to music", completed: false, priority: "Medium" },
    { id: 2, name: "Playing games", completed: true, priority: "Low" },
    { id: 3, name: "Reading books", completed: false, priority: "High" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    setCheckedTodo: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

export default todosSlice;
