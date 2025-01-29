import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          y: "0%",
          duration: 0.5,
          opacity: 1,
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          y: "100%",
          duration: 0.5,
          opacity: 0,
        });
      }
    },
    [finishRidePanel]
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
          to={"/captain-home"}
          className="right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full m-3 border-black border"
        >
          <i className="ri-logout-box-r-line"></i>
        </NavLink>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 flex flex-col bg-yellow-400 rounded-t-lg z-50"
       >
        <div className="mb-3"  onClick={() => setFinishRidePanel(true)}>
          <h5 className="text-2xl text-center font-bold">
            <i className="ri-arrow-up-wide-line"></i>
          </h5>
        </div>
        <div className="flex items-center justify-between p-4"  onClick={() => setFinishRidePanel(true)}>
          <h4 className="text-xl font-semibold">4 KM Away</h4>
          <NavLink className="text-xl flex items-center justify-center bg-[#8fce00] text-black p-3 rounded font-medium">
            Complate Ride
          </NavLink>
        </div>
        <div
          ref={finishRidePanelRef}
          className="fixed w-full bottom-0 h-[90%] translate-y-full bg-white py-3 px-2"
        >
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
