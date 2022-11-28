import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar mt-4 bg-white"
        style={{ height: "35rem", width: "20rem" }}
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link  className="pt-4" as={Link} to={"/setting/changeProfile"}>
            <img src="https://img.icons8.com/material-outlined/24/C850F2/admin-settings-male.png" />{" "}
            Change Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="pt-4" as={Link} to={"/setting/changePassword"}>
            <img src="https://img.icons8.com/material-outlined/24/C850F2/user-lock.png" />{" "}
            Change Password
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className="pt-4"as={Link} to={"/setting/uploadAvatar"}>
            <img src="https://img.icons8.com/material-outlined/24/C850F2/upload-to-cloud.png" />{" "}
            Upload Avatar
          </Nav.Link>
        </Nav.Item>
        <img
          src="https://gcdnb.pbrd.co/images/7rHkzoqJ73Og.png?o=1"
          style={{ marginTop: "3rem", width: "200px", height: "200px" }}
        />
      </Nav>
    </div>
  );
};

export default Sidebar;
