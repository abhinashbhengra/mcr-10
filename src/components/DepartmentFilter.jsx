import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { FilterContext } from "../context/FilterContext";

export const DepartmentFilter = ({ departments, filterDispatch }) => {
  const { allProducts } = useContext(ProductsContext);
  const { filterState } = useContext(FilterContext);

  const departmentsfromDB = allProducts.map((p) => p.department);
  const uniqueDepartment = Array.from(new Set(departmentsfromDB));

  const checkSelected = (value) => {
    console.log("clicked", filterState.categories);
    return filterState.categories === value;
  };

  const handleDepartment = (e) => {
    filterDispatch({ type: "SET_CATEGORY", payload: e.target.value });
  };

  return (
    <>
      <div>
        <select
          name="department"
          onChange={handleDepartment}
          className="border"
        >
          <option value="All" selected={"All" === filterState.categories}>
            All Department
          </option>
          {uniqueDepartment.map((d) => (
            <option key={d} value={d} selected={d === filterState.categories}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
