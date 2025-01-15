import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import StartUp from "./pages/StartUp";
import Home from "./pages/Home";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserProtectWrap from "./pages/UserProtectWrap";
import UserLogout from "./pages/UserLogout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route
          path="/home"
          element={
            <UserProtectWrap>
              <Home />
            </UserProtectWrap>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />

        <Route
          path="/user/logout"
          element={
            <UserProtectWrap>
              <UserLogout />
            </UserProtectWrap>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
