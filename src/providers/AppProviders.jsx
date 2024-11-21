import { CategoriesProvider } from "../contexts/CategoriesContext";
import { ProductsProvider } from "../contexts/ProductsContext";

function AppProviders({ children }) {
  return (
    <CategoriesProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CategoriesProvider>
  );
}
export default AppProviders;
