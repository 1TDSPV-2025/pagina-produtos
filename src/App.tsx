import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { AddCategory } from "./pages/add-category";
import { Categories } from "./pages/categories";
import { Products } from "./pages/products";
import { AddProduct } from "./pages/add-product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Products />} />
          <Route path="/add/products" element={<AddProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add/categories" element={<AddCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
