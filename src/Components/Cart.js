import React, { useState } from "react";

import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { minusQty, plusQty, removeItemm } from "../redux/action";

const Cart = () => {
  const login = useSelector((state) => state.checkLogin);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  var totalPrice = 0;
  let productQty = JSON.parse(localStorage.getItem("product"));
  const [productList, setProductList] = useState(productQty);

  const handleUpdateQty = (id) => {
    dispatch(plusQty(id));
    setProductList(JSON.parse(localStorage.getItem("product")));
  };
  const handleMinusQty = (id) => {
    dispatch(minusQty(id));
    setProductList(JSON.parse(localStorage.getItem("product")));
  };
  const removeItem = (id) => {
    dispatch(removeItemm(id));
    setProductList(JSON.parse(localStorage.getItem("product")));
    navigate("/cart");
  };

 
  productList &&
    productList.forEach((item) => {
      totalPrice += item.price * item.qty;
    });
 
  JSON.stringify(localStorage.setItem("price", JSON.stringify(totalPrice)));
  const newArray = [];
  productList &&
    productList.forEach((item) => {
      newArray.push({ product: item._id, qty: item.qty });
    });
  localStorage.setItem("orderItems", JSON.stringify(newArray));
  return (
    <div style={{ marginTop: "20px" }}>
      {" "}
      {productList ? (
        productList.map((item) => {
          return (
            <div key={item._id}>
              <Container>
                <Row>
                  <Col>
                    <Card
                      className="text-center mt-2"
                      style={{ width: "100% " }}
                    >
                      <Card.Body
                        style={{ borderBottom: "1px solid lightgrey" }}
                      >
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
                                      handleMinusQty(item._id);
                                    }}
                                  >
                                    -
                                  </Button>
                                  <Form.Control
                                    type="text"
                                    min={1}
                                    max={item.countInStock}
                                    value={item.qty}
                                    readOnly
                                    style={{ width: "50px", height: "30px" }}
                                  />
                                  <Button
                                    style={{ height: "30px" }}
                                    onClick={() => {
                                      handleUpdateQty(item._id);
                                    }}
                                  >
                                    +
                                  </Button>
                                </Col>
                                <Col>
                                  <img
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      removeItem(item._id);
                                    }}
                                    src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/40/FA5252/external-recycle-bin-graph-design-kiranshastry-lineal-kiranshastry.png"
                                  />
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
        })
      ) : (
        <h3 style={{ color: "red" }}>cart is empty</h3>
      )}
      {
        <div className="d-flex pt-3">
          <Badge
            className="mx-auto"
            style={{ width: "30%", height: "10%" }}
            bg="warning"
          >
            TotalPrice: $ {JSON.parse(localStorage.getItem("price"))}{" "}
          </Badge>
          <Button
            variant="primary"
            className="mx-auto"
            style={{ width: "20%" }}
            onClick={() => login && productList.length && navigate("/Address")}
          >
            Next
          </Button>
        </div>
      }
    </div>
  );
};

export default Cart;
