import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Homepage";
import Purchase from "./pages/Purchase/Purchase";
import "./App.css";
import { CartProvider } from "./components/Cart/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchase/:shoeId" element={<Purchase />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
