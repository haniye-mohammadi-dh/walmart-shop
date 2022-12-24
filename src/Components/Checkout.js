import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitCart } from "../redux/action";

const Checkout = () => {
  let cart = JSON.parse(localStorage.getItem("product"));

  const x =  useSelector(response=>response.address)
  console.log(x);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      {cart ? (
        cart.map((item) => {
          return (
            <Container>
              <Row>
                <Col>
                  <Card className="text-center mt-2" style={{ width: "100%" }}>
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
                                <Card.Title>{item.color}</Card.Title>
                              </Col>
                              <Col>
                                <Card.Title> ${item.price} </Card.Title>
                              </Col>
                              <Col>
                                <Card.Title>count {item.qty} </Card.Title>
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
          );
        })
      ) : (
        <Spinner></Spinner>
      )}
      <div className="d-flex mt-2">
        <Badge
          className="mx-auto "
          pill
          style={{ width: "30%", height: "20px" }}
          bg="secondary"
        >
          Total Price: $ {JSON.parse(localStorage.getItem("price"))}{" "}
        </Badge>
        <Badge
          className="mx-auto"
          pill
          style={{ width: "30%", height: "20px" }}
          bg="secondary"
        >
          shopping Price: $ 5
        </Badge>
      </div>
      <div className="d-flex mt-5">
        <Button
          variant="primary"
          className="mx-auto"
          style={{ width: "20%" }}
          onClick={() => {
            navigate("/cart");
          }}
        >
          edit
        </Button>
        <Button
          variant="primary"
          className="mx-auto"
          style={{ width: "20%" }}
          onClick={() => {
            dispatch(submitCart(x.city, x.address, x.postal, x.number));
            localStorage.removeItem("product");
            navigate("/orders");
            
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
