import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductsList from "./components/ProductsList";
import useLocalStorage from "./hooks/useLocalStorage";
import AppProviders from "./providers/AppProviders";

function App() {
  const [products, setProducts] = useLocalStorage("products", []);

  return (
    <AppProviders>
      <div className="bg-slate-800 max-h-fit min-h-screen">
        <Navbar />

        {/* Container */}
        <div className="flex flex-col items-center justify-center px-4">
          {/* App Content */}
          <div className="container max-w-lg mx-auto relative">
            <CategoryForm />

            <ProductForm setProducts={setProducts} />

            <ProductsList products={products} setProducts={setProducts} />
          </div>
        </div>
      </div>
    </AppProviders>
  );
}

export default App;
