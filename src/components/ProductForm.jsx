import { useState } from "react";
import SelectCategory from "./SelectCategory";
import Button from "../ui/Button";
import Input from "../ui/Input";

function ProductForm({ setProducts }) {
  const [isShown, setIsShown] = useState(false);
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: 0,
    category: "",
  });

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

  return (
    <div className="mb-6">
      <Button
        onClick={() => setIsShown(true)}
        style={`${isShown && "hidden"} btn--text`}
        text="Add New Product ?"
      />

      <div className={`${isShown || "hidden"}`}>
        <h2 className="text-slate-300 font-bold text-xl mb-3">
          Add New Product
        </h2>

        <form className="flex flex-col bg-slate-700 rounded-xl p-4 gap-y-4">
          <Input
            label="Title"
            id="product-title"
            name="title"
            value={productFormData.title}
            onChange={changeHandler}
          />

          <Input
            label="Quantity"
            id="product-quantity"
            name="quantity"
            value={productFormData.quantity}
            onChange={changeHandler}
            type="number"
          />

          <SelectCategory
            productFormData={productFormData}
            setProductFormData={setProductFormData}
            edit
          />

          <div className="flex items-center justify-between gap-x-4">
            <Button
              onClick={cancelHandler}
              text="Cancel"
              style="btn--secondary"
            />

            <Button
              onClick={addNewProductHandler}
              style="btn--primary"
              text="Add Product"
              disabled={
                productFormData.title === "" ||
                productFormData.quantity <= 0 ||
                productFormData.category === ""
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProductForm;
