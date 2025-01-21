import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VechiclePanel from "../components/VechiclePanel";
import { ConfirmedRide } from "../components/ConfirmedRide";
import WaitForDriver from "../components/WaitForDriver";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");

  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);

  const panelRef = useRef(null);

  const arrow = useRef(null);
  const vehicleArrow = useRef(null);

  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundPanelRef = useRef(null);
  const waitingForDriverPanelRef = useRef(null);
  
  const formHanlder = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "60%",
          display: "block",
          duration: 0.5,
        });
        gsap.to(arrow.current, { opacity: 1, duration: 0.2 });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          display: "none",
          duration: 0.5,
        });
        gsap.to(arrow.current, { opacity: 0, duration: 0.2 });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, { y: "0%", duration: 0.5 });
        gsap.to(vehicleArrow.current, { opacity: 1, duration: 0.2 });
      } else {
        gsap.to(vehiclePanelRef.current, { y: "100%", duration: 0.5 });
        gsap.to(vehicleArrow.current, { opacity: 0, duration: 0.2 });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, { y: "0%", duration: 0.5 });
      } else {
        gsap.to(confirmRidePanelRef.current, { y: "100%", duration: 0.5 });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundPanelRef.current, { y: "0%", duration: 0.5 ,opacity:1});
        // setInterval(() => {
        //   gsap.to(vehicleFoundPanelRef.current, { y: "100%", duration: 0.5 ,opacity:0});
        //   gsap.to(waitingForDriverPanelRef.current, { y: "0%", duration: 0.5 ,opacity:1});
        // }, 3000);
      } else {
        gsap.to(vehicleFoundPanelRef.current, { y: "100%", duration: 0.5, opacity:0});
      }
    },
    [vehicleFound]
  );

  return (
    <div className="h-screen w-screen relative">
      <img
        className="w-16 absolute left-7 top-7"
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
        alt="Uber Logo"
      />
      <div className="h-full w-full"
       onClick={() => {
        setPanelOpen(false), setVehiclePanel(false), setconfirmRidePanel(false);
        setVehicleFound(false)
      }}
      >
        <img
          className="h-screen w-screen object-cover"
          src="https://elluminatimedia.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/rydex/UberAppSourceCode/drvr1.png"
          alt=""
         
        />
      </div>
      <div className="absolute h-screen top-0 w-full flex flex-col justify-end">
        <div className="h[30%] bg-white w-full p-6 relative">
          <h5 ref={arrow} className="text-2xl opacity-0">
            <i
              onClick={() => setPanelOpen(false)}
              className="ri-arrow-down-wide-line absolute right-6 font-bold"
            ></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              formHanlder();
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-800 rounded-full"></div>
            <input
              className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mb-5 mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickUp}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
            />
            <input
              className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full"
              type="text"
              placeholder="Enter your Destination"
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 hidden px-3 py-2">
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"
      >
        <VechiclePanel
          setVehiclePanel={setVehiclePanel}
          vehicleArrow={vehicleArrow}
          setconfirmRidePanel={setconfirmRidePanel}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"
      >
        <ConfirmedRide
          setconfirmRidePanel={setconfirmRidePanel}
          setVehicleFound={setVehicleFound}
          confirmRidePanelRef={confirmRidePanelRef}
        />
      </div>
      <div
      ref={vehicleFoundPanelRef} 
      className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 opacity-0">
        <LookingForDriver
        vehicleFoundPanelRef={vehicleFoundPanelRef} 
        setVehicleFound={setVehicleFound}
        />
      </div>
       <div 
       ref={waitingForDriverPanelRef}
       className="fixed w-full z-10 bottom-0 translate-y-0 bg-white py-3 ">
        <WaitForDriver 
        />
      </div>
    </div>
  );
};

export default Home;
