import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const Product = ({
  price,
  imgSrc,
  quantity,
  itemName,
  handleAddToCartClicked
}) => {
  const name =
    itemName.length < 15 ? itemName : itemName.substring(0, 15) + "...";
  return (
    <Card style={{ width: "12.5rem" }} border="success">
      <Card.Img variant="top" src={imgSrc} alt={itemName} height="150rem" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <b style={{ fontSize: "24px" }}>&#36;{price}</b>
          {quantity ? `  ${quantity} in stock` : null}
        </Card.Text>
        <Button
          variant="success"
          onClick={handleAddToCartClicked}
          disabled={quantity > 0 ? "" : "disabled"}
          block
        >
          {quantity > 0 ? "Add to cart" : "Sold Out"}
        </Button>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  itemName: PropTypes.string
};

export default Product;
