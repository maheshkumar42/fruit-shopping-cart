import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import CardDeck from "react-bootstrap/CardDeck";
import { getVisibleProducts } from "../reducers/products";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList itemName="Products">
    <CardDeck>
      {products.map(product => (
        <ProductItem
          key={product.itemName}
          product={product}
          onAddToCartClicked={() => addToCart(product.itemName)}
        />
      ))}
    </CardDeck>
  </ProductsList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantityRemaining: PropTypes.number.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer);
