import React from "react";
import PropTypes from "prop-types";

const ProductsList = ({ itemName, children }) => (
  <div>
    <h3>{itemName}</h3>
    <div>{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  itemName: PropTypes.string.isRequired
};

export default ProductsList;
