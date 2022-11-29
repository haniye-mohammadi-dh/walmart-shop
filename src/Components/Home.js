import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getData } from "../redux/action";
import {
  Badge,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getData());
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {loading ? (
        <Spinner animation="border" variant="info" />
      ) : error ? (
        <h1>
          <Badge bg="danger" className="mt-5">
            {error}
          </Badge>
        </h1>
      ) : (
        <Container>
          <Row>
            {data.map((item, index) => {
              return (
                <Col key={item._id}>
                  <Card
                    style={{ width: "18rem", marginTop: "2rem" }}
                    className="cart-hover"
                    onClick={() => { navigate(`/product/${item._id}`)}}
                  >
                    <Card.Img
                      variant="top"
                      style={{
                        width: "10rem",
                        height: "10rem",
                        marginLeft: "4rem",
                      }}
                      src="https://asset.msi.com/resize/image/global/product/product_1652084089f186edc14f9d018b77a37b5aee4f5a5a.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                    />
                    <Card.Body style={{ height: "10rem" }}>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        {!item.countInStock ? (
                          <p>Not available in stock</p>
                        ) : (
                          <p>
                            Available in stock{" "}
                            <Badge bg="success">{item.countInStock}</Badge>
                          </p>
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body className="d-flex">
                      <Card.Text href="#" className="ms-4">
                        <img src="https://img.icons8.com/ios/23/null/expensive-2--v1.png" />{" "}
                        ${item.price}
                      </Card.Text>
                      <Card.Text href="#" style={{ marginLeft: "7rem" }}>
                        {item.rating}
                        <img src="https://img.icons8.com/fluency/23/null/star.png" />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Home;
