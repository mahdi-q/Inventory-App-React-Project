import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useLocalStorage("categories", []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);

  if (context === undefined)
    throw new Error("CategoriesContext was used outside of CategoriesProvider");

  return context;
}
