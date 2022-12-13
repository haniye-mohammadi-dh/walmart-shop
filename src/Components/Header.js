import React, { useEffect } from "react";
import { ButtonGroup, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../redux/action";
const Header = () => {
  const navigate = useNavigate();

  const login = useSelector((state) => state.checkLogin);
  const useremail = useSelector((state) => state.userData?.email);
  const product = useSelector((state) => state.cartProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [login]);

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
                    {product?.length}
                    <span className="visually-hidden">cart</span>
                  </span>
                </button>
              </Nav.Link>
              <Nav.Link eventKey={2} className="ms-4">
                {login ? (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/profile")}
                    >
                      <img src="https://img.icons8.com/cotton/30/null/gender-neutral-user--v3.png" />
                      {useremail}
                    </span>
                    <span>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          split
                          variant=""
                          id="dropdown-split-basic"
                        />

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => navigate("/profile")}>
                            profile
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => navigate("/orders")}>
                            orders
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => navigate("/setting/changeProfile")}
                          >
                            settings
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              localStorage.removeItem("token");
                              localStorage.removeItem("user");
                              localStorage.removeItem("login")
                            window.location.reload()
                            }}
                          >
                            log out
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                  </div>
                ) : (
                  <p
                    onClick={() => {
                      navigate("login");
                    }}
                  >
                    {" "}
                    login
                  </p>
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
