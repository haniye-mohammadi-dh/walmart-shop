import axios from "axios";
import React, { useState } from "react";
import { Badge, Button, Form, Navbar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const req = async () => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/login",
        {
          email: `${userName}`,
          password: `${password}`,
        }
      );
    } catch (error) {
      const answer = error.response.data;
      setresolve(JSON.parse(JSON.stringify(answer)));
      console.log(answer);
    }
  };
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [resolve, setresolve] = useState({});
  const [userNameTuched, setUserNameTuched] = useState(false);
  const [passwordTuched, setPasswordTuched] = useState(false);

  return (
    <div>
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
          height: "auto",
          paddingBottom: "8px"
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
          <Form.Label>Email address / User name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email / User name"
            style={{ width: "30rem", marginLeft: "13%" }}
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
          />{" "}
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
        {!resolve.success &&resolve.message!=="4 errors occurred"&& <p style={{ color: "red" }}>{resolve.message}</p>}
{resolve.message==="4 errors occurred"&&<p style={{ color: "red" }}>please fill the filds</p>}
        <Button
          variant="outline-success"
          type="button"
          
          onClick={req}
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
    </div>
  );
};

export default Login;
