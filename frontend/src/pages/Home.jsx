import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");

  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const panelRef = useRef(null);
  const arrow = useRef(null);
  const vehicleArrow = useRef(null);
  const vehiclePanelRef = useRef(null);

  const formHanlder = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        
        gsap.to(panelRef.current, {height: "60%",display: "block",duration: 0.5,});
        gsap.to(arrow.current, { opacity: 1, duration: 0.2 });
      } else {
        
        gsap.to(panelRef.current, {height: "0%",display: "none",duration: 0.5,});
        gsap.to(arrow.current, { opacity: 0, duration: 0.2 });
      }
    },
    [panelOpen]
  );

  useGSAP(function () {
   if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, { y: "0%", duration: 0.5});
      gsap.to(vehicleArrow.current, { opacity: 1, duration: 0.2 });

    } else {
      gsap.to(vehiclePanelRef.current, { y: "100%",duration: 0.5});
      gsap.to(vehicleArrow.current, { opacity: 0, duration: 0.2 });
      
    }
  }, [vehiclePanel]);

  return (
    <div className="h-screen w-screen relative">
      <img
        className="w-16 absolute left-7 top-7"
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
        alt=""
      />
      <div className="h-full w-full"
        >
        <img
          className="h-screen w-screen object-cover"
          src="https://elluminatimedia.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/rydex/UberAppSourceCode/drvr1.png"
          alt=""
          onClick={() => {setPanelOpen(false),setVehiclePanel(false)}
        }
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
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"
      >
         <h5 ref={vehicleArrow} className="text-2xl opacity-0 w-full absolute text-center p-3 top-0 font-bold">
            <i
              onClick={() => setVehiclePanel(false)}
              className="ri-arrow-down-wide-line"
            ></i>
          </h5>
        <h2 className="text-xl font-semibold mb-4">Choose a Vehicle</h2>
        <div className="flex border-2 active:border-black mb-4 rounded-xl w-full items-center justify-center gap-4 p-3">
          <img
            className="h-12"
            src="https://buggyhub.com/images/vehicles/Hatchback.png"
            alt=""
          />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              UberGO
              <span>
                <i className="ri-user-fill"></i>5
              </span>
            </h4>

            <h5 className="font-medium text-sm">2 mints away</h5>
            <p className="font-normal text-gray-700 text-xs">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs200.00</h2>
        </div>
        <div className="flex border-2 active:border-black mb-4 rounded-xl w-full items-center justify-center gap-4 p-3">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto
              <span>
                <i className="ri-user-fill"></i>5
              </span>
            </h4>

            <h5 className="font-medium text-sm">2 mints away</h5>
            <p className="font-normal text-gray-700 text-xs">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs100.00</h2>
        </div>
        <div className="flex border-2 active:border-black mb-4 rounded-xl w-full items-center justify-center gap-4 p-3">
          <img
            className="h-12"
            src="https://buggyhub.com/images/vehicles/Hatchback.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-base">
              Premium
              <span>
                <i className="ri-user-fill"></i>5
              </span>
            </h4>

            <h5 className="font-medium text-sm">2 mints away</h5>
            <p className="font-normal text-gray-700 text-xs">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs200.00</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
