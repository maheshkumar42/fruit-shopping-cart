import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CartItems = ({ price, imgSrc, quantity, itemName }) => {
  const total = quantity * price;
  return (
    <Row noGutters="true">
      <Col>
        <Row>
          <Col xs={4} md={4}>
            <Image src={imgSrc} width="30px" height="30px" />
          </Col>
          <Col xs={2} md={2}>
            <Button variant="secondary" size="sm">
              +
            </Button>
          </Col>
          <Col xs={2} md={2} style={{ textAlign: "center" }}>
            {quantity}
          </Col>
          <Col xs={2} md={2}>
            <Button variant="secondary" size="sm">
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            @ <b>&#36;{price}</b> each = {total}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

CartItems.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  itemName: PropTypes.string
};

export default CartItems;
