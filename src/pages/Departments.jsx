import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const Departments = () => {
  const { allProducts } = useContext(ProductsContext);

  const departments = allProducts.map((p) => p.department);
  const uniqueDepartment = new Set(departments);
  return (
    <>
      <div className="flex gap-10 justify-between border ">
        {Array.from(uniqueDepartment).map((d) => (
          <div
            key={d}
            className="bg-gray-300 p-2 text-center shadow-lg cursor-pointer "
          >
            <p>{d}</p>
          </div>
        ))}
      </div>
    </>
  );
};
