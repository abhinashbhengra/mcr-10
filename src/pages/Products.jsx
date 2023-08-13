import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { FilterContext } from "../context/FilterContext";
import { getFilteredData } from "../utils/getFilteredData";
import { Filters } from "../components/Filters";

export const Products = () => {
  const { allProducts } = useContext(ProductsContext);
  const { filterState } = useContext(FilterContext);
  const filteredData = getFilteredData(allProducts, filterState);
  // console.log("filtered prod", filteredData);
  return (
    <div className="p-9">
      <div className="flex justify-between mt-6">
        <h1 className="text-xl font-bold">Products</h1>
        <Filters />
        <Link to="/add-product" className="mt-2 bg-blue-500 p-2 text-white">
          New
        </Link>
      </div>

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
    </div>
  );
};
