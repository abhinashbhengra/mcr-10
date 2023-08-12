import { createContext, useEffect, useState } from "react";
import { inventoryData } from "../api/data";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  const value = { allProducts };

  useEffect(() => {
    setAllProducts(inventoryData);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
