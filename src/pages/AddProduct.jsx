export const AddProductPage = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Add New Product</h1>
      <p>Department:</p>
      <select name="department" className="border">
        <option value="" selected disabled>
          Select Department
        </option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>
      <p>Name:</p>
      <input type="text" name="name" className="border" />
      <p>Description:</p>
      <input type="text" name="description" className="border" />
      <p>Price:</p>
      <input type="text" name="price" className="border" />
      <p>Stock:</p>
      <input type="text" name="stock" className="border" />
      <p>SKU:</p>
      <input type="text" name="sku" className="border" />
      <p>Supplier:</p>
      <input type="text" name="supplier" className="border" />
      <p>Delivered:</p>
      <input type="text" name="delivered" className="border" />
      <p>Image URL:</p>
      <input type="text" name="imgURL" className="border block" />
      <button className="mt-2 bg-blue-500 p-2 text-white">Add Product</button>
    </>
  );
};
