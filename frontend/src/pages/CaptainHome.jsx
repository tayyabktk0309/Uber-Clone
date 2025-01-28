import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";


const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef =  useRef(null);
  const confirmRidePopupPanelRef =  useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, { y: "0%", duration: 0.5 ,opacity:1});
        // setInterval(() => {
        //   gsap.to(ridePopupPanelRef.current, { y: "100%", duration: 0.5 ,opacity:0});
        //   gsap.to(ridePopupPanelRef.current, { y: "0%", duration: 0.5 ,opacity:1});
        // }, 3000);
      } else {
        gsap.to(ridePopupPanelRef.current, { y: "100%", duration: 0.5, opacity:0});
      }
    },
    [ridePopupPanel]
  );
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, { y: "0%", duration: 0.5 ,opacity:1});
      } else {
        gsap.to(confirmRidePopupPanelRef.current, { y: "100%", duration: 0.5, opacity:0});
      }
    },
    [confirmRidePopupPanel]
  );
  return (
    <div className="h-screen">
      <div className="fixed flex items-center justify-between w-screen p-4">
        <img
          className="w-16 left-7 top-7"
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt="Uber Logo"
        />
        <NavLink
          to={"/captain-login"}
          className="right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full m-3 border-black border"
        >
          <i className="ri-logout-box-r-line"></i>
        </NavLink>
      </div>
      <div className="h-3/5">
        <img
        className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 py-3 px-3" >
        <CaptainDetails />
      </div>
      <div
      ref={ridePopupPanelRef}
       className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-3 px-2">
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
      <div
      ref={confirmRidePopupPanelRef}
       className="fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white py-3 px-2">
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
