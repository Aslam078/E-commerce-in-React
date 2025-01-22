import "./App.css";
import Layout from "./Layout/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./components/home";
import CategoryWiseProduct from "./components/category-wise-product";
import ProductInfo from "./components/product-info";
import Footer from "./Layout/footer";
import Login from "./Login/login";
import Profile from "./Login/profile";
import CartComponent from "./Cart/cart-component";
import SearchProduct from "./Layout/search-product";
import AllCategory from "./Category/all-category";
import CategoryProducts from "./Category/category-products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="Category" element={<CategoryWiseProduct />} />
          </Route>
          <Route path="User/Profile" element={<Profile />} />
          <Route path="Login" element={<Login />} />
          <Route path="Product/detail/" element={<ProductInfo />} />
          <Route path="Category/Product/detail/" element={<ProductInfo />} />
          <Route path="cart/" element={<CartComponent />} />
          <Route path="search/" element={<SearchProduct />} />
          <Route path="search/Product/detail/" element={<ProductInfo />} />
          <Route path="all categories" element={<AllCategory />} />
          <Route path="all categories/product" element={<CategoryProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
