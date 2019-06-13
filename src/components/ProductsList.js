import React from "react";
import PropTypes from "prop-types";
import CardGroup from "react-bootstrap/CardGroup";

const ProductsList = ({ itemName, children }) => (
  <CardGroup>{children}</CardGroup>
);

ProductsList.propTypes = {
  children: PropTypes.node
};

export default ProductsList;
