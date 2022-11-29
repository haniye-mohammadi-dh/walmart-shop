import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Signup from "./Components/Signup";
import Address from "./Components/Address";
import Checkout from "./Components/Checkout";
import ChangePassword from "./Components/ChangePassword";
import Sidebar from "./Components/Sidebar";
import ChangeProfile from "./Components/ChangeProfile";
import UploadAvatar from "./Components/UploadAvatar";

import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Components/Profile";
import GoLogin from "./Components/GoLogin";
import UnFound from "./Components/UnFound";

function App() {
  const [login, setLogin] = useState(null);
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const req = async () => {
    try {
      const { data } = await axios.get(
        "http://kzico.runflare.run/user/profile",
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiaGF3bmkiLCJpYXQiOjE2Njk3MTgxMjQsImV4cCI6MTY3MDMyMjkyNH0.80fPc6oywoT893mbyxcO9ms69FsoxBkV55Xaqxj5zI8",
          },
        }
      );

      setLogin(data.success);
      setEmail(data.user.email);
      setImg(data.user.image);
      console.log(email);
    } catch (error) {
      setLogin(error.response.data.success);
    }
  };
  console.log(login);
  useEffect(() => {
    req();
  });
  return (
    <div className="App">
      <Header login={login} email={email} img={img}/>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={!login?<Login />:<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={!login?<Signup />:<Home/>} />
        <Route path="/address" element={login?<Address />:<GoLogin/>} />
        <Route path="/checkout" element={login?<Checkout />:<GoLogin/>} />
        <Route path={"/setting/changePassword"} element={login?<ChangePassword />:<GoLogin/>} />
        <Route path="/setting/changeProfile" element={login?<ChangeProfile />:<GoLogin/>} />
        <Route path="/setting/uploadAvatar" element={login?<UploadAvatar />:<GoLogin/>} />
        <Route path="/profile" element={login?<Profile />:<GoLogin/>} />
        <Route path="/*" element={<UnFound/>} />
          
      </Routes>
    </div>
  );
}

export default App;
