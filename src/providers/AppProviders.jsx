import { CategoriesProvider } from "../contexts/CategoriesContext";

function AppProviders({ children }) {
  return <CategoriesProvider>{children}</CategoriesProvider>;
}
export default AppProviders;
