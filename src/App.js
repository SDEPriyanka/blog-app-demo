import "./App.css";
import Products from "./components/products/Products";
import ProductsDetails from "./components/product-details/ProductsDetails";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/Products" element={<Products />} />
            <Route path="/post/:postId" element={<ProductsDetails />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
