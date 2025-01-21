import React from "react";

const VechiclePanel = ({
  vehicleArrow,
  setVehiclePanel,
  setconfirmRidePanel,
}) => {
  return (
    <div>
      <h5
        ref={vehicleArrow}
        className="text-2xl opacity-0 w-full absolute text-center p-3 top-0 font-bold"
      >
        <i
          onClick={() => setVehiclePanel(false)}
          className="ri-arrow-down-wide-line"
        ></i>
      </h5>
      <h2 className="text-xl font-semibold mb-4">Choose a Vehicle</h2>
      <div
        className="flex border-2 active:border-black mb-4 rounded-xl w-full items-center justify-center gap-4 p-3"
        onClick={() => {
          setconfirmRidePanel(true), setVehiclePanel(false);
        }}
      >
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
      <div
        className="flex border-2 active:border-black mb-4 rounded-xl w-full items-center justify-center gap-4 p-3"
        onClick={() => {
          setconfirmRidePanel(true), setVehiclePanel(false);
        }}
      >
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
      <div
        className="flex border-2 active:border-black mb-4 rounded-xl w-full items-center justify-center gap-4 p-3"
        onClick={() => {
          setconfirmRidePanel(true), setVehiclePanel(false);
        }}
      >
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
  );
};

export default VechiclePanel;
