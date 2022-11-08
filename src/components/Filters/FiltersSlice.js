// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/setSearch":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/setStatus":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/setPriority":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    setSearch: (state, action) => {
      //caí này nó tương tự như việc tạo ra 1 action creators với type = thằng name ở trên và tên bằng tên hàm trong reducer
      state.search = action.payload;
    }, // => {type: "filters/setSearch"}
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export default filtersSlice;
