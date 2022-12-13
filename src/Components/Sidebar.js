import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../sidebar.css";
const Sidebar = () => {
  const[changePassword,setChangePassword] =useState(false)
  const[changeProfile,setChangeProfile] =useState(true)
  const[upload,setUpload] =useState(false)
  return (
    <div>
      <Nav
        className="navbar  col-md-12 d-block d-md-block   bg-light sidebar mt-4 bg-white  "
      
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link className=" pt-4" as={Link} to={"/setting/changeProfile"} onClick={() =>{setChangeProfile(true);setChangePassword(false);setUpload(false)}}style={{color:changeProfile&&"green"}}>
            <img src="https://img.icons8.com/material-outlined/24/C850F2/admin-settings-male.png" />{" "}
            Change Profile{changeProfile&&"*"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className=" pt-4" as={Link} to={"/setting/changePassword"} onClick={() =>{setChangeProfile(false);setChangePassword(true);setUpload(false)}}style={{color:changePassword&&"green"}} >
            <img src="https://img.icons8.com/material-outlined/24/C850F2/user-lock.png" />{" "}
            Change Password{changePassword&&"*"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className=" pt-4" as={Link}  to={"/setting/uploadAvatar"} onClick={() =>{setChangeProfile(false);setChangePassword(false);setUpload(true)}}style={{color:upload&&"green"}}>
            <img src="https://img.icons8.com/material-outlined/24/C850F2/upload-to-cloud.png" />{" "}
            Upload Avatar{upload&&"*"}
          </Nav.Link>
        </Nav.Item>
        <img
          src="https://gcdnb.pbrd.co/images/7rHkzoqJ73Og.png?o=1"
          width="150" height="200"
          className="sidebarImg"
        />
      </Nav>
    </div>
  );
};

export default Sidebar;
