import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const LookingForDriver = ({vehicleFoundPanelRef,setVehicleFound}) => {
  const loadingBarRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingBarRef.current) {
        loadingBarRef.current.continuousStart(50);
      }
    }, 1000);
   
  },);
  return (
    <div className="py-1">
      <LoadingBar color="#000" ref={loadingBarRef}></LoadingBar>
      <div>
        <h5 
        ref={vehicleFoundPanelRef}
        onClick={()=>setVehicleFound(false)}
        className="text-2xl w-full text-center p-1 font-bold">
          <i className="ri-arrow-down-wide-line text-3xl"></i>
        </h5>
        <h2 className="text-xl font-semibold mb-10">Looking for a driver</h2>
        <div className="flex flex-col justify-between items-center gap-4 p-3">
          <div className="bg-blue-50 rounded-full w-52 h-16 p-1 flex justify-center">
            <div className="bg-blue-100 rounded-full w-32 p-1 flex justify-center">
              <img
                className="h-[90px] absolute top-[95px]"
                src="https://buggyhub.com/images/vehicles/Hatchback.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-start items-center gap-4  h-16 rounded-xl p-2 my-2 ">
              <h2 className="rounded-full w-10 flex justify-center items-center">
                <i className="ri-map-pin-range-fill"></i>
              </h2>
              <div>
                <h4 className="text-lg font-semibold">Street 131 house 21</h4>
                <p className="text-ms text-gray-500">
                  G13/4 Islamabad, pakistan
                </p>
              </div>
            </div>
            <hr />
            <div className="w-full flex justify-start items-center gap-4  h-16 rounded-xl p-2 my-2 ">
              <h2 className=" rounded-full w-10 flex justify-center items-center">
                <i className="ri-square-fill"></i>
              </h2>
              <div>
                <h4 className="text-lg font-semibold">
                  Chak Shahzad Form houses
                </h4>
                <p className="text-ms text-gray-500">Islamabad, pakistan</p>
              </div>
            </div>
            <hr />
            <div className="w-full flex justify-start items-center gap-4  h-16 rounded-xl p-2 my-2 ">
              <h2 className=" rounded-full w-10 flex justify-center items-center">
                <i className="ri-bank-card-2-fill"></i>
              </h2>
              <div>
                <h4 className="text-lg font-semibold">Rs.200</h4>
                <p className="text-ms text-gray-500">CASH, cash</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
