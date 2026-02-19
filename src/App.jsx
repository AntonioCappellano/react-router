import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import "./assets/products.css";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/about-us" Component={AboutPage} />
          <Route path="/product" Component={ProductPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
