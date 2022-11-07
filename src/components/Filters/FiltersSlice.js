const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/setSearch":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/setStatus":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/setPriority":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
