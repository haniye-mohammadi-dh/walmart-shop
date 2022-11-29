import React from 'react'
import { Badge, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const GoLogin = () => {
    const navigate= useNavigate();
  return (
    <div>
<h1><Badge bg="warning">plase login or signup for this page</Badge></h1>
<Button onClick={()=>navigate("/login")}>Login</Button>
<Button onClick={()=>navigate("/signup")}>Signup</Button>
    </div>
  )
}

export default GoLogin