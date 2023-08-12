export const initialFilters = {
  categories: "All",
  lowStock: false,
  sortBy: null,
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return { ...initialFilters, categories: action.payload };

    case "SET_CATEGORY":
      return { ...state, categories: action.payload };

    case "SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "LOW_STOCK":
      return {
        ...state,
        lowStock: !state.lowStock,
      };

    default:
      return state;
  }
};
