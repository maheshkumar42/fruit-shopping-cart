import React from "react";
import PropTypes from "prop-types";

const Product = ({ price, imgSrc, quantity, itemName }) => (
  <div>
    <img src={imgSrc} alt={itemName} width="50" height="50" />
    <br />
    {itemName}
    <br />
    <b>&#36;{price}</b>
    {quantity ? `  ${quantity} in stock` : null}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  itemName: PropTypes.string
};

export default Product;
