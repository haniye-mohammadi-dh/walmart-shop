import React, { useState } from "react";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { sendLogin } from "../redux/action";

const Login = () => {
  // useEffect(() =>{
  // dispatch(getProfile(token))
  // },[])
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.login);

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameTuched, setUserNameTuched] = useState(false);
  const [passwordTuched, setPasswordTuched] = useState(false);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form
              className="mt-4 mx-auto"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                borderTop: "4px solid #852999",
                borderBottom: "4px solid #852999",
                borderRadius: "10px",
                width: "60%",
                backgroundColor: "white",
                height: "auto",
                paddingBottom: "8px",
              }}
            >
              <Navbar.Brand
                href="#home"
                onClick={() => {
                  navigate("/");
                }}
                className="brand "
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  fontFamily: " 'Raleway', sans-serif",
                }}
              >
                Walmart
              </Navbar.Brand>
              <Form.Group className="mb-1 mt-4  " controlId="formBasicEmail">
                <Form.Label>Email address / User name</Form.Label>
                <Form.Control
                  className="mx-auto"
                  type="text"
                  placeholder="Email/User name"
                  style={{ width: "60%" }}
                  onBlur={(e) => {
                    setUserName(e.target.value);
                    setUserNameTuched(true);
                  }}
                />
              </Form.Group>
              {userName.length < 5 && userNameTuched && (
                <span style={{ color: "red" }}>
                  this fild must be at least 5 character{" "}
                </span>
              )}
              <Form.Group className="mb-1 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="mx-auto"
                  type="password"
                  placeholder="Password"
                  style={{ width: "60%" }}
                  onBlur={(e) => {
                    setPassword(e.target.value);
                    setPasswordTuched(true);
                  }}
                />{" "}
              </Form.Group>
              {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                password
              ) &&
                passwordTuched && (
                  <p style={{ color: "red" }}>
                    password must be at least 1 specilal chracter and 1 capital
                    chracter 1 lower chracter and 4 number
                  </p>
                )}

              {error.length
                ? error.map((item) => {
                    return !item.message ? (
                      <p key={item.message} style={{ color: "red" }}>
                        please fill the fillds
                      </p>
                    ) : (
                      <p key={item.message} style={{ color: "red" }}>
                        {item.message}
                      </p>
                    );
                  })
                : ""}

              <Button
                variant="outline-success"
                type="button"
                onClick={() => {
                  userName.length >= 5 &&
                    password.length >= 7 &&
                    dispatch(sendLogin(userName, password));

                }}
              >
                Log in
              </Button>
              <Button
                variant="outline-primary"
                type="submit"
                className=" ms-3"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sing up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
