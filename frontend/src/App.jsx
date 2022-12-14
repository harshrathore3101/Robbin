import { useEffect } from "react";
import Header from "./components/layout/Header/Header.js";
import { Routes, Route } from "react-router-dom";
import webFont from "webfontloader";
import "./app.css";
import Footer from "./components/layout/Footer/Footer.js";
import Home from "./components/Home/Home.jsx";
import ProductDetails from "./components/Product/ProductDetails.js"
import Products from "./components/Product/Products.js"
import Search from "./components/Product/Search.js";

function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
