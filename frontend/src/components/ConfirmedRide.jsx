import React from "react";

export const ConfirmedRide = ({ setconfirmRidePanel,setVehicleFound, confirmRidePanelRef}) => {
  return (
    <div>
      <h5
      ref={confirmRidePanelRef}
      onClick={() => setconfirmRidePanel(false)}
        className="text-2xl text-center font-bold mb-5"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-xl font-semibold mb-4">Confirm your Ride</h2>
      <div className="flex flex-col justify-between items-center gap-4 p-3">
        <div className="bg-blue-50 rounded-full w-52 h-16 p-1 flex justify-center">
          <div className="bg-blue-100 rounded-full w-32 p-1 flex justify-center">
            <img
              className="h-[90px] absolute top-[120px]"
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
              <p className="text-ms text-gray-500">G13/4 Islamabad, pakistan</p>
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
        <button
        onClick={() => {setVehicleFound(true),setconfirmRidePanel(false)}}
         className="text-xl flex items-center gap-2 justify-center w-full bg-[#8fce00] text-black py-3 rounded mt-5 font-medium">
          Confirm
        </button>
      </div>
    </div>
  );
};
