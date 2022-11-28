import React from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'

const ChangeProfile = () => {
    const navigate = useNavigate();
  return (
    <div>
    <Container style={{marginLeft:"3rem", color:"black"}}>
      <Row>
        <Col md={{ span: 3, offset: 0 }}>
        <Sidebar />
        </Col>
        <Col md={{ span: 5, offset: 0 }}>
        <Form
      className="mt-4"
      style={{
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        borderTop: "4px solid #852999",
        borderBottom: "4px solid #852999",
        borderRadius: "10px",
        width: "40rem",
        marginLeft: "30%",
        backgroundColor: "white",
        height: "35rem",
      }}
    >
      <Navbar.Brand href="#home" onClick={()=>{navigate("/")}} className="brand "style={{fontSize:"3rem", fontWeight:"bold",fontFamily:" 'Raleway', sans-serif"}}>Walmart</Navbar.Brand>
      <Form.Group className="mb-1 mt-4" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name "
          style={{ width: "30rem", marginLeft: "13%" }}
     
        />
      </Form.Group>
      <Form.Group className="mb-1 mt-2" controlId="formBasicEmail">
        <Form.Label>Last Name </Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name "
          style={{ width: "30rem", marginLeft: "13%" }}
     
        />
      </Form.Group>
      <Form.Group className="mb-1 mt-2" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          type="text"
          placeholder="Gender "
          style={{ width: "30rem", marginLeft: "13%" }}
     
        />
      </Form.Group>
      <Form.Group className="mb-1 mt-2" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder=" Age "
          style={{ width: "30rem", marginLeft: "13%" }}
     
        />
      </Form.Group>
      <Form.Group className="mb-1 mt-2" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="City"
          style={{ width: "30rem", marginLeft: "13%" }}
     
        />
      </Form.Group>



      <Button variant="outline-success" type="button" className="mt-3 " >
        Done 
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default ChangeProfile