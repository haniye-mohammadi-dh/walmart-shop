import React, { useEffect } from "react";
import {
  ButtonGroup,
  Container,
  Dropdown,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../redux/action";
const Header = () => {
  const navigate = useNavigate();
  const login = useSelector((state) => state.checkLogin);
  const useremail = useSelector((state) => state.userData?.email);
  const product = JSON.parse(localStorage.getItem("product"));
  const img = JSON.parse(localStorage.getItem("user"))?.image;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [login]);

  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
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
                marginLeft: "10%",
              }}
            >
              Walmart
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 ms-5"
                  style={{ marginRight: "10%" }}
                >
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
                        {product ? product.length : "0"}
                        <span className="visually-hidden">cart</span>
                      </span>
                    </button>
                  </Nav.Link>
                  <Nav.Link eventKey={2}>
                    {login ? (
                      <div>
                        <div style={{ display: "flex", marginTop: "5px" }}>
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.2rem",
                              cursor: "pointer",
                            }}
                            onClick={() => navigate("/profile")}
                          >
                            <img
                              style={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "50%",
                                marginRight: "10px",
                              }}
                              src={
                                img
                                  ? `${img}`
                                  : "https://img.icons8.com/cotton/90/null/gender-neutral-user--v3.png"
                              }
                            />
                            {useremail}
                          </span>
                        </div>
                        <div>
                          <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle
                              split
                              variant=""
                              id="dropdown-split-basic"
                            />

                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => navigate("/profile")}
                              >
                                profile
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => navigate("/orders")}
                              >
                                orders
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  navigate("/setting/changeProfile")
                                }
                              >
                                settings
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  localStorage.removeItem("token");
                                  localStorage.removeItem("user");
                                  localStorage.setItem("login", false);

                                  window.location.reload();
                                }}
                              >
                                log out
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    ) : (
                      !login && (
                        <p
                          onClick={() => {
                            navigate("login");
                          }}
                        >
                          {" "}
                          login
                        </p>
                      )
                    )}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
