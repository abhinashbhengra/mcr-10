import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const DepartmentFilter = ({ departments, filterDispatch }) => {
  const { allProducts } = useContext(ProductsContext);

  const departmentsfromDB = allProducts.map((p) => p.department);
  const uniqueDepartment = Array.from(new Set(departmentsfromDB));

  const handleDepartment = (e) => {
    filterDispatch({ type: "SET_CATEGORY", payload: e.target.value });
  };

  return (
    <>
      <h1>Department Filter</h1>
      <div>
        <select name="department" onChange={handleDepartment}>
          <option value="All">All Department</option>
          {uniqueDepartment.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
