import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Navbar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const[userName,setUserName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[mobileNumber,setMobileNumber]=useState("")

  const[resolve,setresolve] =useState({});
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
      const answer=error.response.data; 
      setresolve(JSON.parse(JSON.stringify(answer)))
    }
  };
  
  return (
    <div>
    
      {" "}
      <Form
        className="mt-4 "
        style={{
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
          borderTop: "4px solid #852999",
          borderBottom: "4px solid #852999",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "40rem",
          marginLeft: "30%",
          height: "35rem",
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
            onChange={(e)=>{setUserName(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control
            type="email"
            placeholder=" email "
            style={{ width: "30rem", marginLeft: "13%" }}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ width: "30rem", marginLeft: "13%" }}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            style={{ width: "30rem", marginLeft: "13%" }}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Mobile number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Mobile number"
            style={{ width: "30rem", marginLeft: "13%" }}
            onChange={(e)=>{setMobileNumber(e.target.value)}}
          /> { !resolve.success&&<h6 style={{color:"red"}}>{resolve.message}</h6>}
        </Form.Group>{" "}
        <Button
          variant="outline-success"
          type="button"
          className="mt-3"
          onClick={req}
        >
          Sing up
        </Button>
        <Button
          variant="outline-primary"
          type="submit"
          className="mt-3 ms-3"
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
