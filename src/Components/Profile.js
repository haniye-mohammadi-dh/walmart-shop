import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const email = useSelector((state) => state.userData?.email);
  const firstname = useSelector((state) => state.userData?.firstname);
  const lastname = useSelector((state) => state.userData?.lastname);
  const mobile = useSelector((state) => state.userData?.mobile);
  const age = useSelector((state) => state.userData?.age);
  const city = useSelector((state) => state.userData?.city);
  const gender = useSelector((state) => state.userData?.gender);
  const username = useSelector((state) => state.userData?.username);
  const image = JSON.parse(localStorage.getItem("user"))?.image;
  const chProfile=JSON.parse(localStorage.getItem("chProfile"))
  // const chAvatar=JSON.parse(localStorage.getItem("chAvatar"))
  if (chProfile===true) {
    window.location.reload() 
    localStorage.setItem("chProfile",JSON.stringify(false))
    // localStorage.setItem("chAvatar",JSON.stringify(false))
  }
  
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card
              style={{ width: "80%", marginTop: "2rem" }}
              className=" mx-auto"
            >
              <Card.Img
                variant="top"
                className="mx-auto"
                style={{
                  width: "10rem",
                  height: "10rem",
                  
                }}
                src={
                  image
                    ? `${image}`
                    : "https://img.icons8.com/cotton/90/null/gender-neutral-user--v3.png"
                }
              />

              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <Card.Title> {username}</Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title> {email}</Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title> {mobile}</Card.Title>
                </ListGroup.Item>
                {firstname && (
                  <ListGroup.Item>
                    <Card.Title> {firstname}</Card.Title>
                  </ListGroup.Item>
                )}
                {lastname && (
                  <ListGroup.Item>
                    <Card.Title> {lastname}</Card.Title>
                  </ListGroup.Item>
                )}

                {age && (
                  <ListGroup.Item>
                    <Card.Title> {age}</Card.Title>
                  </ListGroup.Item>
                )}
                {age && (
                  <ListGroup.Item>
                    <Card.Title> {gender}</Card.Title>
                  </ListGroup.Item>
                )}
                {city && (
                  <ListGroup.Item>
                    <Card.Title> {city}</Card.Title>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
