import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { FilterContext } from "../context/FilterContext";
import { getFilteredData } from "../utils/getFilteredData";

export const Products = () => {
  const { allProducts } = useContext(ProductsContext);
  const { filterState } = useContext(FilterContext);
  const filteredData = getFilteredData(allProducts, filterState);
  console.log(filteredData);
  return (
    <>
      <h1>Products Page</h1>
      <div>
        <div className="flex">
          <p>Image</p>
          <p>Name</p>
          <p>Description</p>
          <p>Price</p>
          <p>Stock</p>
          <p>Supplier</p>
        </div>
        <div>
          {filteredData.map((product) => (
            <div key={product.id} className="flex justify-between">
              <div>
                <img src={product.imageUrl} alt={product.name} width={200} />
              </div>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>{product.stock}</p>
              <p>{product.supplier}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
