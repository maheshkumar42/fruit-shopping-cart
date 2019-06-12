import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      <Row
        style={{
          marginBottom: "0px",
          paddingBottom: "0px"
        }}
      >
        <h2
          style={{
            backgroundColor: "#5cb85c",
            color: "white",
            width: "15%",
            textAlign: "center",
            marginLeft: "10%",
            marginBottom: "0px",
            paddingBottom: "0px",
            marginTop: "2%"
          }}
        >
          FRUITS
        </h2>

        <hr
          style={{
            width: "100%",
            color: "#5cb85c",
            height: "4px",
            backgroundColor: "#5cb85c",
            margin: "0px",
            padding: "0px"
          }}
        />
      </Row>
      <Row>
        <Col sm={10} style={{ marginTop: "2%" }}>
          <ProductsContainer />
        </Col>
        <Col sm={2} style={{ backgroundColor: "#5cb85c", overflow: "hidden" }}>
          <CartContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
