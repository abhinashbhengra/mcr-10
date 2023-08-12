export const StockFilter = ({ stocks, filterDispatch }) => {
  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            name="stock"
            value="lowStock"
            checked={stocks}
            onChange={() => filterDispatch({ type: "LOW_STOCK" })}
          />
          <p className="collection-detail">Low Stock Items</p>
        </label>
      </div>
    </>
  );
};
