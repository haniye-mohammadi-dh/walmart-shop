import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Navbar,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cartProduct, getOneProduct } from "../redux/action";
const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data,loading,error} = useSelector((state) => state.oneProduct);


  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, []);
  console.log(data);
  return (
    <div style={{ marginTop: "20px" }}>
      {loading? ( <Spinner animation="border" variant="info" />
      ) : error ? (
        <h1>
          <Badge bg="danger" className="mt-5">
            {error}
          </Badge>
        </h1>
      ) :
      <Container>
        <Row>
          {data.map((item) => {
            return (
              <Card className="text-center " key={item._id}>
                <Card.Header>
                  {" "}
                  <Navbar.Brand
                    href="#home"
                    onClick={() => {
                      navigate("/");
                    }}
                    className="brand "
                    style={{
                      fontSize: "3rem",
                      fontWeight: "bold",
                      fontFamily: " 'Raleway', sans-serif",
                    }}
                  >
                    Walmart
                  </Navbar.Brand>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={{ span: 5, offset: 0 }}>
                      <Card.Img
                        variant="top"
                        style={{
                          width: "18rem",
                          height: "15rem",
                        }}
                        src="https://asset.msi.com/resize/image/global/product/product_1652084089f186edc14f9d018b77a37b5aee4f5a5a.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
                      />
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>
                      <div style={{ marginLeft: "1rem" }}>
                        <Card.Title>{item.name}</Card.Title>
                        
                        <Card.Text>
                          {item.description}
                          
                        </Card.Text>
                        <Card.Text>
                          {item.brand} <br />
                          {item.color} <br />
                          {item.category}
                          <br />
                          {!item.countInStock ? (
                            <p>Not available in stock</p>
                          ) : (
                            <p>
                              Available in stock{" "}
                              <Badge bg="success">{item.countInStock}</Badge>
                            </p>
                          )}
                          
                          <img src="https://img.icons8.com/ios/23/null/expensive-2--v1.png" />{" "}
                          <span> {item.price}</span>
                          <span className={"ms-5"}>{item.rating}</span>
                          <img src="https://img.icons8.com/fluency/23/null/star.png" />
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setTimeout(() => {
                              window.location.reload()
                            }, 1800);
                            
                            dispatch(cartProduct(productId));
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
                          Add to cart
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>}
    </div>
  );
};

export default Product;
