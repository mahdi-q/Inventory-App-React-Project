import { useState } from "react";
import SelectCategory from "./SelectCategory";

function ProductForm({ categories }) {
  const [isShown, setIsShown] = useState(false);
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: 0,
    category: "",
  });
  const [products, setProducts] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setProductFormData({ ...productFormData, [name]: value });
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setIsShown(false);
    setProductFormData({
      title: "",
      quantity: 0,
      category: "",
    });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();

    const newProduct = {
      ...productFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };

    setProducts((prevState) => [...prevState, newProduct]);
    setProductFormData({
      title: "",
      quantity: 0,
      category: "",
    });
  };

  console.log(products);

  return (
    <div className="mb-6">
      <button
        className={`${isShown && "hidden"} text-slate-500 font-bold text-lg`}
        onClick={() => setIsShown(true)}
      >
        Add New Product ?
      </button>

      <div className={`${isShown || "hidden"}`}>
        <h2 className="text-slate-300 font-bold text-xl mb-3">
          Add New Product
        </h2>

        <form className="flex flex-col bg-slate-700 rounded-xl p-4 gap-y-4">
          <div>
            <label
              htmlFor="product-title"
              className="text-slate-300 block mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="product-title"
              className="bg-transparent border border-slate-500 text-slate-400 rounded-xl py-1 focus:bg-transparent"
              name="title"
              value={productFormData.title}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label
              htmlFor="product-quantity"
              className="text-slate-300 block mb-1"
            >
              Quantity
            </label>
            <input
              type="number"
              id="product-quantity"
              className="bg-transparent border border-slate-500 text-slate-400 rounded-xl py-1"
              name="quantity"
              value={productFormData.quantity}
              onChange={changeHandler}
            />
          </div>

          <SelectCategory
            categories={categories}
            productFormData={productFormData}
            setProductFormData={setProductFormData}
          />

          <div className="flex items-center justify-between gap-x-4">
            <button
              onClick={cancelHandler}
              className="flex-1 text-slate-300 border border-slate-400 rounded-xl py-2"
            >
              Cancel
            </button>

            <button
              onClick={addNewProductHandler}
              className="flex-1 text-slate-200 bg-slate-500 border border-slate-500 rounded-xl py-2"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProductForm;
