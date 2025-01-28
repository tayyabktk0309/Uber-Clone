import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import StartUp from "./pages/StartUp";
import Home from "./pages/Home";
// import CaptainLogin from "./pages/CaptainLogin";
// import CaptainSignup from "./pages/CaptainSignup";
import UserProtectWrap from "./pages/UserProtectWrap";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import Loader from "./components/Loader";
import CaptainProtectWrap from "./pages/CaptainProtectWrap";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const CaptainSignup = React.lazy(() => import("./pages/CaptainSignup"));
const CaptainLogin = React.lazy(() => import("./pages/CaptainLogin"));

const App = () => {
  return (
    <div>
      <Routes>
        {/* statrup routes  */}
        <Route path="/" element={<StartUp />} />

        {/* user routes  */}
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
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />

        {/* captin routes  */}
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrap>
              <CaptainHome />
            </CaptainProtectWrap>
          }
        />
        <Route path="/captain-login" element={
          <Suspense fallback={<Loader />}>
            <CaptainLogin />
          </Suspense>
        } />
        <Route
          path="/captain-signup"
          element={
            <Suspense fallback={<Loader />}>
              <CaptainSignup />
            </Suspense>
          }
        />
         <Route
          path="/captain/logout"
          element={
            <UserProtectWrap>
              <CaptainLogout />
            </UserProtectWrap>
          }
        />

        {/* logout routes for both user and captain  */}
        <Route
          path="/user/logout"
          element={
            <UserProtectWrap>
              <UserLogout />
            </UserProtectWrap>
          }
        />

        {/* error route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
