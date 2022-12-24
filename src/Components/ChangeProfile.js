import React, { useState } from "react";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profile } from "../redux/action";
import Sidebar from "./Sidebar";

const ChangeProfile = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [firstNameOnBelour, setFirstNameOnBelour] = useState(false);
  const [lastNameOnBelour, setLastNameOnBelour] = useState(false);
  const [ageOnBelour, setAgeOnBelour] = useState(false);
  const [cityOnBelour, setCityOnBelour] = useState(false);

  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.changePassword);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <Container style={{ color: "black" }}>
        <Row className="mx-auto ">
          <Col
            md={{ span: 4, offset: 0 }}
            sm={{ span: 1, offset: 0 }}
            className="mx-auto"
          >
            <Sidebar tab="changeProfile" />
          </Col>
          <Col
            md={{ span: 4, offset: 0 }}
            sm={{ span: 8, offset: 0 }}
            className="mx-auto"
          >
            <Form
              className="mt-4 z-index-5"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                borderTop: "4px solid #852999",
                borderBottom: "4px solid #852999",
                borderRadius: "10px",
                width: "100%",
                paddingBottom: "15px",
                backgroundColor: "white",
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
              <Form.Group className="mb-1 mt-4" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name "
                  style={{ width: "70%", marginLeft: "13%" }}
                  onBlur={(e) => {
                    setFirstName(e.target.value);
                    setFirstNameOnBelour(true)
                  }}
                />
                {firstNameOnBelour&&firstName.length<3&&<p style={{color:"red"}}>firstname must be at least 3 characters</p>}
              </Form.Group>
              <Form.Group className="mb-1 mt-2" controlId="formBasicEmail">
                <Form.Label>Last Name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name "
                  style={{ width: "70%", marginLeft: "13%" }}
                  onBlur={(e) => {
                    setLastName(e.target.value);
                    setLastNameOnBelour(true)
                  }}
                  />
                  {lastNameOnBelour&&lastName.length<3&&<p style={{color:"red"}}>lastName must be at least 3 characters</p>}
              </Form.Group>
              <Form.Group className="mb-1 mt-2" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=" Age "
                  style={{ width: "70%", marginLeft: "13%" }}
                  onBlur={(e) => {
                    setAge(e.target.value);
                    setAgeOnBelour(true)
                  }}
                />
                {ageOnBelour&&age<15&&<p style={{color:"red"}}>age must be greater than or equal to 15</p>}
              </Form.Group>
              <Form.Group className="mb-1 mt-2" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  style={{ width: "70%", marginLeft: "13%" }}
                  onBlur={(e) => {
                    setCity(e.target.value);
                    setCityOnBelour(true)
                  }}
                />
                 {cityOnBelour&&city.length<3&&<p style={{color:"red"}}>city must be at least 3 characters</p>}
              </Form.Group>
              <Form.Group className="mb-1 mt-2" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="male "
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      onBlur={(e) => {
                        setGender("male");
                      }}
                    />
                    <Form.Check
                      inline
                      label=" female"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      onBlur={(e) => {
                        setGender("female");
                      }}
                    />
                  </div>
                ))}
              </Form.Group>
              {isClicked &&
                data.map((item) => {
                  return (
                    <div>
                      <span
                        kay={item.message}
                        style={{ color: "green", fontSize: "1rem" }}
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
              {isClicked &&
              !firstName &&
              !lastName &&
              !age &&
              !city ? (
                <p style={{ color: "red" }}>please fill the filds</p>
              ) : error ? (
                error.map((item) => {
                  return (
                    <p key={item.message} style={{ color: "red" }}>
                      {item.message}
                    </p>
                  );
                })
              ) : (
                ""
              )}

              <Button
                variant="outline-success"
                type="button"
                className="mt-3 "
                onClick={() => {
                  setIsClicked(true);
                  dispatch(profile(firstName, lastName, age, city, gender));
                localStorage.setItem("chProfile",JSON.stringify(true))
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

export default ChangeProfile;
