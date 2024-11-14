function ProductList({ product, category }) {
  return (
    <div className="flex flex-row items-center justify-between">
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

        <button className="flex items-center justify-center text-green-400 text-sm border border-green-400 rounded-2xl px-2 h-7">
          edit
        </button>

        <button className="flex items-center justify-center text-red-400 text-sm border border-red-400 rounded-2xl px-2 h-7">
          delete
        </button>
      </div>
    </div>
  );
}
export default ProductList;
