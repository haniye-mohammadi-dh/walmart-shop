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
      const answer=error.response.data; 
      setresolve(JSON.parse(JSON.stringify(answer)))
   
    }
  };
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
const[resolve,setresolve] =useState({});
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
          height: "22rem",
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
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ width: "30rem", marginLeft: "13%" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          /> { !resolve.success&&<h6 style={{color:"red"}}>{resolve.message}</h6>}
        </Form.Group>
      
        <Button
          variant="outline-success"
          type="button"
          className="mt-3 "
          onClick={req}
        >
          Log in
        </Button>
        <Button
          variant="outline-primary"
          type="submit"
          className="mt-3 ms-3"
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
