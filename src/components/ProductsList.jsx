import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";

function ProductsList({ categories, products, setProducts }) {
  return (
    <div className="flex flex-col gap-y-3 pb-6">
      <h2 className="text-slate-300 text-xl font-bold">Products List</h2>

      {/* search bar */}
      <SearchBar />

      {/* sort bar*/}
      <SortBar categories={categories} />

      {/* products list*/}
      <div className="flex flex-col overflow-x-auto ">
        {products.map((product) => (
          <ProductList
            key={product.id}
            product={product}
            setProducts={setProducts}
            category={categories.find((c) => c.id === product.category).title}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductsList;
