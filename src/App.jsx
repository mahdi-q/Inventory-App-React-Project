import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductsList from "./components/ProductsList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [products, setProducts] = useLocalStorage("products", []);
  const [categories, setCategories] = useLocalStorage("categories", []);

  return (
    <div className="bg-slate-800 max-h-fit min-h-screen">
      <Navbar />

      {/* Container */}
      <div className="flex flex-col items-center justify-center px-4">
        {/* App Content */}
        <div className="container max-w-lg mx-auto relative">
          <CategoryForm setCategories={setCategories} />

          <ProductForm
            categories={categories}
            setCategories={setCategories}
            setProducts={setProducts}
          />

          <ProductsList
            categories={categories}
            products={products}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
