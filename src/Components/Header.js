import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate();
  return (
    <div>
         <Navbar style={{height:"6rem"}} collapseOnSelect expand="lg " bg="light">
      <Container>
        <Navbar.Brand href="#home" onClick={()=>{navigate("/")}} className="brand "style={{fontSize:"3rem", fontWeight:"bold",fontFamily:" 'Raleway', sans-serif"}}>Walmart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link ><button type="button" className="btn position-relative" onClick={()=>{navigate("cart")}}>
<img src="https://img.icons8.com/material-outlined/24/null/shopping-cart--v1.png"/>
  <span className="count-cart position-absolute top-0 start-100 translate-middle badge rounded-pill ">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Nav.Link>
            <Nav.Link eventKey={2}  className="ms-4" onClick={()=>{navigate("login")}}>
              login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header