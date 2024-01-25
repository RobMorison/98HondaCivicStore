import NavigationBar from "./NavigationBar";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import "./App.css";
import Home from "./components/home";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/accessories" element={<h1>Accessories</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </div>
  );
}

export default App;
