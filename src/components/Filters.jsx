import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { DepartmentFilter } from "./DepartmentFilter";
import { StockFilter } from "./StockFilter";
import { SortFilter } from "./SortFilter";

export const Filters = () => {
  const { filterState, filterDispatch } = useContext(FilterContext);
  const { categories, lowStock, sortBy } = filterState;
  return (
    <>
      <DepartmentFilter
        departments={categories}
        filterDispatch={filterDispatch}
      />
      <StockFilter stocks={lowStock} filterDispatch={filterDispatch} />
      <SortFilter sortBy={sortBy} filterDispatch={filterDispatch} />
    </>
  );
};
