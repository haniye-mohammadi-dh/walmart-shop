import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "../redux/action";
const Product = () => {
  const { productId } = useParams();
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.oneProduct);
  
    const[product,setProduct]=useState()
  useEffect(() => {
    dispatch(getOneProduct(productId,product,setProduct));
  }, []);
  console.log(data);
  return (
    <div>
      <Container>
        <Row>
          {data.map((item, index, arr) => {
            return (
              <Col key={item._id}>
                {" "}
                <Card
                  style={{
                    width: "30rem",
                    marginLeft: "32%",
                    marginTop: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://asset.msi.com/resize/image/global/product/product_1652084089f186edc14f9d018b77a37b5aee4f5a5a.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>category: {item.category}</ListGroup.Item>
                    <ListGroup.Item>color: {item.color}</ListGroup.Item>
                    <ListGroup.Item>brand: {item.brand}</ListGroup.Item>
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
                    <Card.Text style={{ marginLeft: "6rem" }} href="#">
                      <img src="https://img.icons8.com/ios/23/null/expensive-2--v1.png" />{" "}
                      ${item.price}
                    </Card.Text>
                    <Card.Text href="#" style={{ marginLeft: "10rem" }}>
                      {item.rating}
                      <img src="https://img.icons8.com/fluency/23/null/star.png" />
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    {item.countInStock ? (
                      <Button
                        variant="outline-primary"
                        onClick={() => {
                          
                          Swal.fire({
                            icon: "success",
                            title: "Successfully added to cart",
                            timer: 1500,
                            showConfirmButton: false,
                            showClass: {
                              popup: "animate__animated animate__fadeInDown",
                            },
                            hideClass: {
                              popup: "animate__animated animate__fadeOutUp",
                            },
                          });
                        }}
                      >
                        Add to card
                      </Button>
                    ) : (
                      <Button variant="secondari" disabled>
                        Add to card
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
