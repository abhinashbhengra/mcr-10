export const getFilteredData = (products, filterState) => {
  const { categories, lowStock, sortBy } = filterState;

  const filteredByCategory = (products, categories) => {
    if (categories === "All") {
      return products;
    }
    return products.filter((prod) => prod.department === categories);
  };

  const departmentalFiltered = filteredByCategory(products, categories);

  const filteredBySort = (products, sortBy) => {
    if (!sortBy) {
      return products;
    } else if (sortBy === "Name") {
      return products.sort();
    } else if (sortBy === "Price") {
      return products.sort((a, b) => a.price - b.price);
    } else {
      return products.sort((a, b) => a.stock - b.stock);
    }
  };

  const sortedProducts = filteredBySort(departmentalFiltered, sortBy);

  const filteredByStock = (products, lowStock) => {
    return lowStock
      ? products.filter((product) => product.stock <= 10)
      : products;
  };

  const filteredData = filteredByStock(sortedProducts, lowStock);

  return filteredData;
};
