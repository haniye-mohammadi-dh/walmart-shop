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

import ChangeProfile from "./Components/ChangeProfile";
import UploadAvatar from "./Components/UploadAvatar";
import Profile from "./Components/Profile";
import GoLogin from "./Components/GoLogin";
import UnFound from "./Components/UnFound";
import Orders from "./Components/Orders";
import OneOrder from "./Components/OneOrder";
// import GetProfile from "./Components/GetProfile";
import { useSelector } from "react-redux";

function App() {
const login=useSelector(state=>state.checkLogin);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/goLogin" element={<GoLogin  />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/orders/:orderId" element={<OneOrder />} />
        <Route path="/login" element={login?<Home/>:<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={login?<Home/>:<Signup />} />
        <Route path="/address" element={!login?<GoLogin/>:<Address />} />
        <Route path="/checkout" element={!login?<GoLogin/>:<Checkout />} />
        <Route path={"/setting/changePassword"} element={!login?<GoLogin/>:<ChangePassword />} />
        <Route path="/setting/changeProfile" element={!login?<GoLogin/>:<ChangeProfile />} />
        <Route path="/setting/uploadAvatar" element={!login?<GoLogin/>:<UploadAvatar />} />
        <Route path="/profile" element={!login?<GoLogin/>:<Profile />} />
        <Route path="/*" element={<UnFound/>} />
        <Route path="/orders" element={!login?<GoLogin/>:<Orders />} />
        {/* <Route path="/getProfile" element={<GetProfile/>} /> */}
          
      </Routes>
    </div>
  );
}

export default App;
