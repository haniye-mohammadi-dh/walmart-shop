import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link} from "react-router-dom";
import "../sidebar.css";
const Sidebar = ({ tab }) => {
  const [profile, setProfile] = useState(
    tab === "changeProfile" ? true : false
  );
  const [password, setPassword] = useState(tab === "changePass" ? true : false);
  const [avatar, setAvatar] = useState(tab === "uploadAvatar" ? true : false);
  return (
    <div>
      <Nav
        className="navbar  col-md-12 d-block d-md-block   bg-light sidebar mt-4 bg-white  "
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link
            className=" pt-4"
            as={Link}
            to="/setting/changeProfile"
            style={{ color: profile && "green" }}
          >
            <img src="https://img.icons8.com/material-outlined/24/C850F2/admin-settings-male.png" />{" "}
            Change Profile{profile && "*"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className=" pt-4"
            as={Link}
            to="/setting/changePassword"
            style={{ color: password && "green" }}
          >
            <img src="https://img.icons8.com/material-outlined/24/C850F2/user-lock.png" />{" "}
            Change Password{password && "*"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className=" pt-4"
            as={Link}
            to="/setting/uploadAvatar"
            style={{ color: avatar && "green" }}
          >
            <img src="https://img.icons8.com/material-outlined/24/C850F2/upload-to-cloud.png" />{" "}
            Upload Avatar{avatar && "*"}
          </Nav.Link>
        </Nav.Item>
        <img
          src="https://gcdnb.pbrd.co/images/7rHkzoqJ73Og.png?o=1"
          width="150"
          height="200"
          className="sidebarImg"
        />
      </Nav>
    </div>
  );
};

export default Sidebar;
