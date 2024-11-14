import SearchBar from "./SearchBar";
import SortBar from "./SortBar";

function ProductsList({ categories }) {
  return (
    <div className="flex flex-col gap-y-3 pb-6">
      <h2 className="text-slate-300 text-xl font-bold">Products List</h2>

      {/* search bar */}
      <SearchBar />

      {/* sort */}
      <SortBar categories={categories} />
    </div>
  );
}
export default ProductsList;
