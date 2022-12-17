import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneOrder } from "../redux/action";

const OneOrder = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.getOrder);

  useEffect(() => {
    dispatch(oneOrder(orderId));
  }, []);

  return (
    <div>
      {data.map((item) => {
        return item.orderItems.map((item) => {
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
                                <Card.Title>{item.product.name}</Card.Title>
                              </Col>
                              <Col>
                                <Card.Title>{item.product.color}</Card.Title>
                              </Col>
                              <Col>
                                <Card.Title> ${item.product.price} </Card.Title>
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
        });
      })}
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
    </div>
  );
};

export default OneOrder;
