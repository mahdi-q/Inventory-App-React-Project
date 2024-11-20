import { useState } from "react";
import Modal from "../ui/Modal";
import EditProduct from "./EditProduct";

function ProductList({ product, products, setProducts, categories }) {
  const [editOpen, SetEditOpen] = useState(false);

  const category = categories.find((c) => c.id === product.category).title;

  const handleDeleteProduct = () => {
    setProducts((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="flex flex-row items-center justify-between min-w-[350px] pb-3">
      <span className="text-slate-300">{product.title}</span>

      <div className="flex flex-row items-center justify-center gap-x-2">
        <span className="text-slate-300 text-sm">
          {new Date(product.createdAt).toLocaleDateString()}
        </span>

        <span className="flex items-center justify-center text-slate-300 text-sm border border-slate-400 rounded-2xl px-3 h-7">
          {category}
        </span>

        <span className="flex items-center justify-center text-slate-300 text-sm border border-slate-400 rounded-full w-7 h-7">
          {product.quantity}
        </span>

        <button
          onClick={() => SetEditOpen(true)}
          className="flex items-center justify-center text-green-400 text-sm border border-green-400 rounded-2xl px-2 h-7"
        >
          edit
        </button>
        <Modal
          title="Edit Product"
          open={editOpen}
          onClose={() => SetEditOpen(false)}
        >
          <EditProduct
            SetEditOpen={SetEditOpen}
            categories={categories}
            product={product}
            products={products}
            setProducts={setProducts}
          />
        </Modal>

        <button
          onClick={handleDeleteProduct}
          className="flex items-center justify-center text-red-400 text-sm border border-red-400 rounded-2xl px-2 h-7"
        >
          delete
        </button>
      </div>
    </div>
  );
}
export default ProductList;
