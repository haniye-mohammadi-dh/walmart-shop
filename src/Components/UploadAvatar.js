import React, { useState } from "react";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { upload } from "../redux/action";
import Sidebar from "./Sidebar";

const UploadAvatar = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const { data, error } = useSelector((state) => state.uploadAvatar);
  return (
    <div>
      <Container style={{ color: "black" }}>
        <Row className="mx-auto">
          <Col
            md={{ span: 4, offset: 0 }}
            sm={{ span: 1, offset: 0 }}
            className="mx-auto"
          >
            <Sidebar tab="uploadAvatar" />
          </Col>
          <Col
            md={{ span: 4, offset: 0 }}
            sm={{ span: 8, offset: 0 }}
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
              onSubmit={(e) => e.preventDefault()}
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
                <Form.Label>Upload Your Avatar</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Old password "
                  style={{ width: "70%", marginLeft: "13%" }}
                  onBlur={(e) => {
                    setImg(e.target.files[0]);
                  }}
                />
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
                        src="https://img.icons8.com/color/60/null/double-tick.png"
                        style={{ marginBottom: "0.5rem" }}
                      />
                    </div>
                  );
                })}

              {isClicked && error
                ? error.map((item) => {
                    return (
                      <p key={item.message} style={{ color: "red" }}>
                        {item.message}
                      </p>
                    );
                  })
                : ""}
              <Button
                variant="outline-success"
                type="button"
                className="mt-3 "
                onClick={() => {
                  {
                    setIsClicked(true);
                    dispatch(upload(img));
                    setTimeout(() => {
                      
                      !error.length&&    window.location.reload()
                    },2000);
                
                  
                      

                  }
                }}
              >
                Upload
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UploadAvatar;
