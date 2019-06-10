import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

function App() {
  return (
    <div>
      <h2>Fruits</h2>
      <hr />
      <ProductsContainer />
      <hr />
      <CartContainer />
    </div>
  );
}

export default App;
