import React from "react";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const username = useSelector((state) => state.userData?.username);
  const email = useSelector((state) => state.userData?.email);
  const mobile = useSelector((state) => state.userData?.mobile);
  const firstName = useSelector((state) => state.userData?.firstname);
  const lastName = useSelector((state) => state.userData?.lastname);
  const gender = useSelector((state) => state.userData?.gender);
  const age = useSelector((state) => state.userData?.age);
  const city = useSelector((state) => state.userData?.city);
  const img = useSelector((state) => state.userData?.img);

  return (
    <div>
      {" "}
      <Container >
        <Row>
          <Col >
            <Card
              style={{ width: "40rem", marginTop: "2rem" }}
              className=" mx-auto"
            >
              <Card.Img
                variant="top"
                style={{
                  width: "10rem",
                  height: "10rem",
                  marginLeft: "15rem",
                }}
                src="https://img.icons8.com/cotton/90/null/gender-neutral-user--v3.png"
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
                {firstName && (
                  <ListGroup.Item>
                    <Card.Title> {firstName}</Card.Title>
                  </ListGroup.Item>
                )}
                {lastName && (
                  <ListGroup.Item>
                    <Card.Title> {lastName}</Card.Title>
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
