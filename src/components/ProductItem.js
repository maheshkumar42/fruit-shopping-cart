import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      itemName={product.itemName}
      price={product.price}
      imgSrc={product.imgSrc}
      quantity={product.quantityRemaining}
    />
    <button
      onClick={onAddToCartClicked}
      disabled={product.quantityRemaining > 0 ? "" : "disabled"}
    >
      {product.quantityRemaining > 0 ? "Add to cart" : "Sold Out"}
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantityRemaining: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
