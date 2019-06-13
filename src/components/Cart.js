import React from "react";
import PropTypes from "prop-types";
import CartItems from "./CartItems";
import Container from "react-bootstrap/Container";

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <CartItems
        itemName={product.itemName}
        price={product.price}
        imgSrc={product.imgSrc}
        quantity={product.quantity}
        key={product.itemName}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div style={{ color: "white" }}>
      <h3>Shopping Cart</h3>
      <Container>{nodes}</Container>
      <hr
        style={{
          width: "100%",
          color: "#white",
          height: "2px",
          backgroundColor: "#white",
          margin: "0px",
          padding: "0px"
        }}
      />
      <p>Total: &#36;{total}</p>

      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Confirm Purchase
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;
