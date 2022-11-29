import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Navbar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [confirm, setConfirm] = useState("");
  const [emailTuched, setEmailTuched] = useState(false);
  const [userNameTuched, setUserNameTuched] = useState(false);
  const [passwordTuched, setPasswordTuched] = useState(false);
  const [confirmTuched, setConfirmTuched] = useState(false);
  const [mobileNumberTuched, setMobileNumberTuched] = useState(false);

  const [resolve, setresolve] = useState({});
  const req = async () => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: `${userName}`,
          email: `${email}`,
          password: `${password}`,
          mobile: `${mobileNumber}`,
        }
      );
    } catch (error) {
      const answer = error.response.data;
      setresolve(JSON.parse(JSON.stringify(answer)));
    }
  };

  return (
    <div>
      {" "}
      <Form
        className="mt-3 "
        style={{
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
          borderTop: "4px solid #852999",
          borderBottom: "4px solid #852999",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "40rem",
          marginLeft: "30%",
          paddingBottom: "7px",
          height: "auto",
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
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            placeholder=" User name"
            style={{ width: "30rem", marginLeft: "13%" }}
            onBlur={(e) => {
              setUserName(e.target.value);
              setUserNameTuched(true);
            }}
          />
          {userName.length < 5 && userNameTuched && (
            <span style={{ color: "red" }}>
              username must be at least 5 character{" "}
            </span>
          )}
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control
            type="email"
            placeholder=" email "
            style={{ width: "30rem", marginLeft: "13%" }}
            onBlur={(e) => {
              setEmail(e.target.value);
              setEmailTuched(true);
            }}
          />
        </Form.Group>
        {!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && emailTuched && (
          <span style={{ color: "red" }}>email is not valid</span>
        )}
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ width: "30rem", marginLeft: "13%" }}
            onBlur={(e) => {
              setPassword(e.target.value);
              setPasswordTuched(true);
            }}
          />
        </Form.Group>
        {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          password
        ) &&
          passwordTuched && (
            <span style={{ color: "red" }}>
              password must be at least 1 specilal chracter and 1 capital
              chracter 1 lower chracter and 4 number
            </span>
          )}
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            style={{ width: "30rem", marginLeft: "13%" }}
            onBlur={(e) => {
              setConfirm(e.target.value);
              setConfirmTuched(true);
            }}
          />
        </Form.Group>
        {confirm !== password && confirmTuched && (
          <span style={{ color: "red" }}>password is not match </span>
        )}
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Mobile number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Mobile number"
            style={{ width: "30rem", marginLeft: "13%" }}
            onBlur={(e) => {
              setMobileNumber(e.target.value);
              setMobileNumberTuched(true);
            }}
          />{" "}
          {!/^(09)[\d]/.test(mobileNumber) && mobileNumberTuched && (
            <span style={{ color: "red" }}>mobile number is not valid</span>
          )}
          {!resolve.success && (
            <p style={{ color: "red" }}>{resolve.message}</p>
          )}
        </Form.Group>{" "}
        <Button variant="outline-success" type="button" onClick={req}>
          Sing up
        </Button>
        <Button
          variant="outline-primary"
          type="submit"
          className=" ms-3"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
