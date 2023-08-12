export const getFilteredData = (products, filterState) => {
  const { categories, lowStock, sortBy } = filterState;

  const filteredByCategory = (products, categories) => {
    if (categories.length < 1) {
      return products;
    }
    return products.filter((product) => {
      categories.includes(product.department);
    });
  };

  const departmentalFiltered = filteredByCategory(products, categories);

  const filteredBySort = (products, sortBy) => {
    if (!sortBy) {
      return products;
    } else if (sortBy === "NAME") {
      return products.sort((a, b) => a.name - b.name);
    } else if (sortBy === "PRICE") {
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
