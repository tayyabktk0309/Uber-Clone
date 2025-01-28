import React from "react";

const Riding = () => {
  return (
    <div className="h-screen">
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="px-3 pt-5 flex justify-between">
          <div className="flex p-1">
            <img
              className="h-16 relative z-30 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_XRGE9j0tQkvkYFKQU5MlZw86IXuV9TbfA&s"
              alt="driver"
            />
            <img
              className="h-16 absolute left-14"
              src="https://buggyhub.com/images/vehicles/Hatchback.png"
              alt="car"
            />
          </div>
          <div className="flex flex-col text-end py-3">
            <div className="text-gray-500 text-xl font-semibold">Khan</div>
            <div className="text-2xl font-bold">AYC-3324</div>
            <div className="text-gray-500 text-lg">White Honda Civic</div>
            <div className="text-gray-700">&#9733;4.9 </div>
          </div>
        </div>
        <hr />
        <div className="w-full flex justify-start items-center gap-4 h-12 rounded-xl p-2">
          <h2 className="rounded-full w-10 flex justify-center items-center">
            <i className="ri-map-pin-range-fill text-3xl"></i>
          </h2>
          <div>
            <h4 className="text-xl font-bold">Street 131 house 21</h4>
            <p className="text-lg text-gray-500">G13/4 Islamabad, pakistan</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-4  h-16 rounded-xl p-2 my-2 ">
              <h2 className=" rounded-full w-10 flex justify-center items-center">
                <i className="ri-bank-card-2-fill"></i>
              </h2>
              <div>
                <h4 className="text-lg font-semibold">Rs.200</h4>
                <p className="text-ms text-gray-500">CASH, cash</p>
              </div>
            </div>
        <button className="text-xl flex items-center gap-2 justify-center w-full bg-[#8fce00] text-black py-3 rounded mt-3 font-medium">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
