export const SortFilter = ({ sortBy, filterDispatch }) => {
  const handleSortFilter = (e) => {
    filterDispatch({ type: "SORT_BY", payload: e.target.value });
  };
  return (
    <div>
      <select name="sort" onChange={handleSortFilter}>
        <option value="Name">Name</option>
        <option value="Price">Price</option>
        <option value="Stock">Stock</option>
      </select>
    </div>
  );
};
