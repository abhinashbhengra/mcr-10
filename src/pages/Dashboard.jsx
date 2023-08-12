import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const Dashboard = () => {
  const { allProducts } = useContext(ProductsContext);

  const totalStock = allProducts.reduce((acc, curr) => {
    return curr.stock + acc;
  }, 0);

  const totalDeliverd = allProducts.reduce((acc, curr) => {
    return acc + curr.delivered;
  }, 0);

  const lowStock = allProducts.reduce((acc, curr) => {
    return curr.stock <= 10 ? acc + 1 : acc;
  }, 0);

  return (
    <>
      <div className="flex gap-10 justify-between border ">
        <div className="bg-gray-300 p-2 text-center shadow-lg cursor-pointer">
          <p>{totalStock}</p>
          <p>Total Stock</p>
        </div>
        <div className="bg-gray-300 p-2 text-center shadow-lg cursor-pointer">
          <p>{totalDeliverd}</p>
          <p>Total Delivered</p>
        </div>
        <div className="bg-gray-300 p-2 text-center shadow-lg cursor-pointer">
          <p>{lowStock}</p>
          <p>Low Stock Items</p>
        </div>
      </div>
    </>
  );
};
