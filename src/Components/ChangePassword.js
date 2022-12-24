import React, { useState } from "react";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { password } from "../redux/action";
import Sidebar from "./Sidebar";
const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPasswordTuched, setOldPasswordTuched] = useState(false);
  const [newPasswordTuched, setNewPasswordTuched] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.changePassword);
  console.log(data);
  return (
    <div>
      <Container style={{ color: "black" }}>
        <Row className="mx-auto">
          <Col
            md={{ span: 4, offset: 0 }}
            sm={{ span: 0, offset: 0 }}
            className="mx-auto"
          >
            <Sidebar tab="changePass" />
          </Col>
          <Col
            md={{ span: 5, offset: 0 }}
            sm={{ span: 7, offset: 0 }}
            className="mx-auto"
          >
            <Form
              className="mt-5"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                borderTop: "4px solid #852999",
                borderBottom: "4px solid #852999",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: "white",
                height: "auto",
                paddingBottom: "15px",
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
              <Form.Group className="mb-1 mt-4" controlId="formBasicEmail">
                <Form.Label>Old Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Old password "
                  style={{ width: "70%", marginLeft: "13%" }}
                  onBlur={(e) => {
                    setOldPassword(e.target.value);
                    setOldPasswordTuched(true);
                  }}
                />
                {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                  oldPassword
                ) &&
                  oldPasswordTuched && (
                    <span style={{ color: "red" }}>
                      password must be at least 1 specilal chracter and 1
                      capital chracter 1 lower chracter and 4 number
                    </span>
                  )}
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=" New Password"
                  style={{ width: "70%", marginLeft: "13%" }}
                  onBlur={(e) => {
                    setNewPassword(e.target.value);
                    setNewPasswordTuched(true);
                  }}
                />
                {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                  newPassword
                ) &&
                  newPasswordTuched && (
                    <span style={{ color: "red" }}>
                      password must be at least 1 specilal chracter and 1
                      capital chracter 1 lower chracter and 4 number
                    </span>
                  )}
              </Form.Group>
              {isClicked &&
                data.map((item) => {
                  return (
                    <div>
                      <span
                        kay={item.message}
                        style={{ color: "green", fontSize: "1.5rem" }}
                      >
                        {item.message}
                      </span>
                      <img
                        src="https://img.icons8.com/color/50/null/double-tick.png"
                        style={{ marginBottom: "0.5rem" }}
                      />
                    </div>
                  );
                })}
          

              {isClicked && !oldPassword && !newPassword ? (
                <p style={{ color: "red" }}>please fill the filds</p>
              ) : isClicked ? (
                error[0]?.message.length > 0 && (
                  <p style={{ color: "red" }}>{error[0].message}</p>
                )
              ) : (
                ""
              )}
              <Button
                variant="outline-success"
                type="button"
                className="mt-3 "
                onClick={() => {
                  setIsClicked((last) => !last);
                  dispatch(password(oldPassword, newPassword));
                }}
              >
                Done
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChangePassword;
