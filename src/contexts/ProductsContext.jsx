import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useLocalStorage("products", []);

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (context === undefined)
    throw new Error("ProductsContext was used outside of ProductsProvider");

  return context;
}
