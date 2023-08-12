import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { FilterContext } from "../context/FilterContext";
import { useNavigate } from "react-router-dom";

export const Departments = () => {
  const { allProducts } = useContext(ProductsContext);
  const { filterDispatch } = useContext(FilterContext);

  const navigate = useNavigate();

  const departments = allProducts.map((p) => p.department);
  const uniqueDepartment = new Set(departments);

  const HandleDepartmentFilter = (e) => {
    filterDispatch({ type: "SET_CATEGORY", payload: e.target.id });
    navigate("/products");
  };
  return (
    <>
      <div className="flex gap-10 justify-between border ">
        {Array.from(uniqueDepartment).map((d) => (
          <div
            key={d}
            id={d}
            onClick={HandleDepartmentFilter}
            className="bg-gray-300 p-2 text-center shadow-lg cursor-pointer "
          >
            {d}
          </div>
        ))}
      </div>
    </>
  );
};
