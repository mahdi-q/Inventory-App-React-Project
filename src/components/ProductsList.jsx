import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";

function ProductsList({ products, setProducts }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortDateValue, setSortDateValue] = useState("latest");
  const [sortCategoryValue, setSortCategoryValue] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearch(result);
    result = filterSortDate(result);
    result = filterSortCategory(result);

    setFilteredProducts(result);
  }, [products, searchValue, sortDateValue, sortCategoryValue]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value.trim().toLocaleLowerCase());
  };
  const handleSortDate = (e) => {
    setSortDateValue(e.target.value);
  };
  const handleSortCategory = (e) => {
    setSortCategoryValue(e.target.value);
  };

  const filterSearch = (array) => {
    return array.filter((product) =>
      product.title.trim().toLocaleLowerCase().includes(searchValue)
    );
  };
  const filterSortDate = (array) => {
    return array.sort((a, b) => {
      if (sortDateValue === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sortDateValue === "earliest") {
        return new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1;
      }
    });
  };
  const filterSortCategory = (array) => {
    if (sortCategoryValue === "") {
      return array;
    } else {
      return array.filter(
        (product) => product.category === parseInt(sortCategoryValue)
      );
    }
  };

  return (
    <div className="flex flex-col gap-y-3 pb-6">
      <h2 className="text-slate-300 text-xl font-bold">Products List</h2>

      {/* search bar */}
      <SearchBar searchValue={searchValue} onSearch={handleSearch} />

      {/* sort bar*/}
      <SortBar
        sortDateValue={sortDateValue}
        sortCategoryValue={sortCategoryValue}
        onSortDate={handleSortDate}
        onSortCategory={handleSortCategory}
      />

      {/* products list*/}
      <div className="flex flex-col overflow-x-auto ">
        {filteredProducts.map((product) => (
          <ProductList
            key={product.id}
            product={product}
            products={products}
            setProducts={setProducts}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductsList;
