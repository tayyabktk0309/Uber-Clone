import React from "react";
import { NavLink } from "react-router-dom";

const FinishRide = ({setFinishRidePanel}) => {
  
  return (
    <div>
      <h5 className="text-2xl text-center font-bold mb-2" onClick={()=>setFinishRidePanel(false)}>
        <i className="ri-arrow-down-wide-line" ></i>
      </h5>
      <h2 className="text-xl font-semibold mb-2">Finish this Ride</h2>
      <div>
        <div className="flex items-center justify-between p-2 mt-4 bg-yellow-500 text-white rounded-lg">
          <div className="flex items-center gap-2">
            <img
              className="h-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_XRGE9j0tQkvkYFKQU5MlZw86IXuV9TbfA&s"
              alt="user"
            />
            <h2 className="text-lg font-medium">Waleed</h2>
          </div>
          <h5 className="text-lg font-semibold">2.5 KM</h5>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-4 p-3">
        <div className="w-full">
          <div className="w-full flex justify-start items-center gap-4  h-14 rounded-xl p-2 my-2 ">
            <h2 className="rounded-full w-10 flex justify-center items-center">
              <i className="ri-map-pin-range-fill"></i>
            </h2>
            <div>
              <h4 className="text-lg font-semibold">Street 131 house 21</h4>
              <p className="text-ms text-gray-500">G13/4 Islamabad, pakistan</p>
            </div>
          </div>
          <hr />
          <div className="w-full flex justify-start items-center gap-4  h-14 rounded-xl p-2 my-2 ">
            <h2 className=" rounded-full w-10 flex justify-center items-center">
              <i className="ri-square-fill"></i>
            </h2>
            <div>
              <h4 className="text-lg font-semibold">
                Chak Shahzad Farm houses
              </h4>
              <p className="text-ms text-gray-500">Islamabad, pakistan</p>
            </div>
          </div>
          <hr />
          <div className="w-full flex justify-start items-center gap-4  h-14 rounded-xl p-2 my-2 ">
            <h2 className=" rounded-full w-10 flex justify-center items-center">
              <i className="ri-bank-card-2-fill"></i>
            </h2>
            <div>
              <h4 className="text-lg font-semibold">Rs.200</h4>
              <p className="text-ms text-gray-500">CASH, cash</p>
            </div>
          </div>
          <hr />
          <div className="w-full gap-4 rounded-xl p-2">
            <div>
              <h4 className="text-md font-semibold">Description</h4>
              <p className="text-ms text-gray-500">
                I am waiting for you plz quickly.
              </p>
            </div>
          </div>
        </div>
        <NavLink
          to={"/captain-home"}
          className="text-xl flex items-center gap-2 justify-center w-full bg-[#8fce00] text-black py-3 rounded font-medium"
        >
          Finish Ride
        </NavLink>
        <p className="text-xs">Click on finish ride Button, if you hove collect the payment.</p>
      </div>
    </div>
  );
};

export default FinishRide;
