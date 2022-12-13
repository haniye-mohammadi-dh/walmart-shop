import React, { useState } from "react";
import { useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Navbar,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const product = useSelector((state) => state.cartProduct);
  const login = useSelector((state) => state.checkLogin);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  console.log(price);
  var totalPrice = 0;
  console.log(totalPrice);
  console.log(count);

  localStorage.setItem("price", JSON.stringify(totalPrice));
  return (
    <div style={{ marginTop: "20px" }}>
      {" "}
      {product.map((item) => {
        return (
          <div key={item._id}>
            <Container>
              <Row>
                <Col>
                  <Card
                    className="text-center mt-2"
                    style={{ width: "80rem" }}
                    key={item._id}
                  >
                    <Card.Body style={{ borderBottom: "1px solid lightgrey" }}>
                      <Row>
                        <Col md={{ span: 3, offset: 0 }}>
                          <Card.Img
                            variant="top"
                            style={{
                              width: "10rem",
                              height: "10rem",
                            }}
                            src="https://asset.msi.com/resize/image/global/product/product_1652084089f186edc14f9d018b77a37b5aee4f5a5a.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                          />
                        </Col>
                        <Col md={{ span: 8, offset: 0 }}>
                          <div style={{ width: "100%", marginTop: "5%" }}>
                            <Row>
                              <Col>
                                <Card.Title>{item.name}</Card.Title>
                              </Col>
                              <Col>
                                <Card.Title> {item.price} $</Card.Title>
                              </Col>
                              <Col className="d-flex">
                                <Button
                                  style={{ height: "30px" }}
                                  onClick={() => {
                                    count > 1 && setCount((last) => last - 1)
                                  }}
                                >
                                  -
                                </Button>
                                <Form.Control
                                  type="text"
                                  placeholder="0"
                                  value={count}
                                  readOnly
                                  style={{ width: "20%", height: "30px" }}
                                />
                                <Button
                                  style={{ height: "30px" }}
                                  onClick={() => {
                                    count < item.countInStock &&
                                    setCount((last) => last + 1)
                                  }}
                                >
                                  +
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
      <div className="d-flex">
        <Badge className="mx-auto pt-2.5" style={{ width: "10%" }} bg="warning">
          TotalPrice: $ {price}{" "}
        </Badge>
        <Button
          variant="primary"
          className="mx-auto"
          style={{ width: "20%" }}
          onClick={() => login && navigate("/Address")}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Cart;
