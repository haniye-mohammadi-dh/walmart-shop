import React, { useState } from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitCart } from '../redux/action';

const Address = () => {
    const navigate = useNavigate();
const dispatch = useDispatch();
const [address,setAddress] = useState();
const [city,setCity] = useState();
const [postal,setPostal] = useState();
const [number,setNumber] = useState();

  return (
    <div> {" "}
    <Container>
      <Row>
        <Col>
    <Form
      className="mt-4 mx-auto "
      style={{
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        borderTop: "4px solid #852999",
        borderBottom: "4px solid #852999",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "80%",
 
        height: "auto",
        paddingBottom:"15px"
      }}
    >
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
      <Form.Group className="mb-1 mt-4" controlId="formBasicPassword">
        <Form.Label>city</Form.Label>
        <Form.Control
          type="text"
          placeholder="City"
          style={{ width: "70%", marginLeft: "13%" }}
          onBlur={(e)=>setCity(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Address </Form.Label>
        <Form.Control
          type="text"
          placeholder=" Address "
          style={{ width: "70%", marginLeft: "13%" }}
        onBlur={(e)=>setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Postal code</Form.Label>
        <Form.Control
          type="number"
          placeholder="Postal code"
          style={{ width: "70%", marginLeft: "13%" }}
          onBlur={(e)=>setPostal(e.target.value)}
          
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Phone number"
          style={{ width: "70%", marginLeft: "13%" }}
          onBlur={(e)=>setNumber(e.target.value)}
        />
      </Form.Group>
      < Button
      onClick={()=>{
        dispatch(submitCart(city,address,postal,number));
        navigate("/checkout")
      }
      }
        variant="outline-success"
        type="button"
        className="mt-3" 
      >
        Next
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Address