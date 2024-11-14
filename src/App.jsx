import { useState } from "react";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductsList from "./components/ProductsList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="bg-slate-800 max-h-fit min-h-screen">
      <Navbar />

      {/* Container */}
      <div className="flex flex-col items-center justify-center px-4">
        {/* App Content */}
        <div className="container max-w-lg mx-auto relative">
          <CategoryForm setCategories={setCategories} />

          <ProductForm categories={categories} setProducts={setProducts} />

          <ProductsList categories={categories} products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
