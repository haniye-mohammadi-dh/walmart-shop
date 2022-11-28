import React from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'

const UploadAvatar = () => {
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
        className="mt-5"
        style={{
            boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
          borderTop: "4px solid #852999",
          borderBottom: "4px solid #852999",
          borderRadius: "10px",
          width: "40rem",
          marginLeft: "30%",
          backgroundColor: "white",
          height: "20rem",
        }}
      >
        <Navbar.Brand href="#home" onClick={()=>{navigate("/")}} className="brand "style={{fontSize:"3rem", fontWeight:"bold",fontFamily:" 'Raleway', sans-serif"}}>Walmart</Navbar.Brand>
        <Form.Group className="mb-1 mt-4" controlId="formBasicEmail">
          <Form.Label>Upload Your Avatar</Form.Label>
          <Form.Control
            type="file"
            placeholder="Old password "
            style={{ width: "30rem", marginLeft: "13%" }}
       
          />
        </Form.Group>

     
        

        <Button variant="outline-success" type="button" className="mt-3 " >
          Upload 
        </Button>
      </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UploadAvatar