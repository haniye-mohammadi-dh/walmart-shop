import React from "react";
import { Button, ButtonGroup, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Header = ({ login, email, img }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        style={{ height: "6rem" }}
        collapseOnSelect
        expand="lg "
        bg="light"
      >
        <Container>
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <button
                  type="button"
                  className="btn position-relative"
                  onClick={() => {
                    navigate("cart");
                  }}
                >
                  <img src="https://img.icons8.com/material-outlined/24/null/shopping-cart--v1.png" />
                  <span className="count-cart position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                className="ms-4"
                
              >
                {!login ? (
                  <p onClick={() => {
                  navigate("login");
                }}> login</p>
                ) : (
                  <div>
                    {" "}
                    <Dropdown as={ButtonGroup}>
      {email}

      <Dropdown.Toggle split variant="" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>navigate("/profile")}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={()=>navigate("/orders")}>Orders</Dropdown.Item>
        <Dropdown.Item onClick={()=>navigate("setting/ChangeProfile")}>Settings</Dropdown.Item>
        <Dropdown.Item >Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    <img src="https://img.icons8.com/laces/45/852999/user.png" />
                  </div>

                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
