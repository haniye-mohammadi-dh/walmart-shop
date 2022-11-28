import React from 'react'
import { Button, Form, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Address = () => {
    const navigate = useNavigate();

  return (
    <div> {" "}
    <Form
      className="mt-4 "
      style={{
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        borderTop: "4px solid #852999",
        borderBottom: "4px solid #852999",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "40rem",
        marginLeft: "30%",
        height: "30rem",
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
          style={{ width: "30rem", marginLeft: "13%" }}
         
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Address </Form.Label>
        <Form.Control
          type="text"
          placeholder=" Address "
          style={{ width: "30rem", marginLeft: "13%" }}
        
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Postal code</Form.Label>
        <Form.Control
          type="number"
          placeholder="Postal code"
          style={{ width: "30rem", marginLeft: "13%" }}
          
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Phone number"
          style={{ width: "30rem", marginLeft: "13%" }}
        />
      </Form.Group>
      < Button
        variant="outline-success"
        type="button"
        className="mt-3" onClick={()=>navigate("/checkout")}
      >
        Next
      </Button>
    </Form></div>
  )
}

export default Address