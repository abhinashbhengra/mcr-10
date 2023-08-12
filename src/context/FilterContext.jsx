import { createContext, useReducer } from "react";
import { filterReducer, initialFilters } from "../reducers/filterReducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilters
  );
  console.log("context", filterState);
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
