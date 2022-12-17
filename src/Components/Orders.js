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
import { allOrder } from "../redux/action";

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allOrder());
  }, []);
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.getAllOrder);
  const orders = JSON.parse(localStorage.getItem("orders"));
  return (
    <div>
      <div>
        {loading ? (
          <Spinner animation="border" variant="info" />
        ) : (
          orders?.map((item) => {
            return (
              <Container>
                <Row>
                  <Col>
                    <Card
                      className="text-center mt-5"
                      style={{ width: "100%" }}
                    >
                      {item?.orderItems.map((item) => {
                        return (
                          <Card.Body
                            style={{ borderBottom: "1px solid lightgrey" }}
                          >
                            <Row>
                              <Col md={{ span: 12, offset: 0 }}>
                                <div style={{ width: "100%", marginTop: "5%" }}>
                                  <Row>
                                    <Col md={{ span: 5, offset: 0 }}>
                                      <Card.Img
                                        variant="top"
                                        style={{
                                          width: "5rem",
                                          height: "5rem",
                                        }}
                                        src="https://asset.msi.com/resize/image/global/product/product_1652084089f186edc14f9d018b77a37b5aee4f5a5a.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                                      />
                                    </Col>
                                    <Col>
                                      <Card.Title>
                                        {item.product.name}{" "}
                                      </Card.Title>
                                      <Card.Title>count {item.qty} </Card.Title>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        );
                      })}
                      <div>
                        <div className="d-flex mt-2">
                          <Badge
                            className="mx-auto "
                            pill
                            style={{ width: "30%", height: "20px" }}
                            bg="secondary"
                          >
                            Total Price: ${item.totalPrice}{" "}
                          </Badge>
                          <Button
                            variant="primary"
                            className="mx-auto mb-1"
                            style={{ width: "20%" }}
                            onClick={() => navigate(`/orders/${item._id}`)}
                          >
                            see details
                          </Button>
                          <Badge
                            className="mx-auto"
                            pill
                            style={{ width: "30%", height: "20px" }}
                            bg="secondary"
                          >
                            shopping Price: $ 5
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Container>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Orders;
