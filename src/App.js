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
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/setting/changePassword" element={<ChangePassword />} />
        <Route path="/setting/changeProfile" element={<ChangeProfile />} />
        <Route path="/setting/uploadAvatar" element={<UploadAvatar />} />
          
      </Routes>
    </div>
  );
}

export default App;
