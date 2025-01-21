import React from "react";

const WaitForDriver = () => {
  return (
    <div>
      <h5 className="text-2xl w-full absolute text-center p-3 top-0 font-bold">
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex justify-between items-center gap-5 border-b-2 px-3 py-3">
        <h5 className="text-xl font-semibold">Meet at the pickup point</h5>
        <div className="flex flex-col justify-center items-center text-lg font-semibold w-[65px] h-[65px] bg-black text-white">
          <h4>2</h4>
          <h4>min</h4>
        </div>
      </div>
      <div className="px-3 py-8 flex justify-between">
        <div className="flex ">
          <img
            className="h-20 relative z-30 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_XRGE9j0tQkvkYFKQU5MlZw86IXuV9TbfA&s"
            alt="driver"
          />
          <img
            className="h-20 absolute left-14"
            src="https://buggyhub.com/images/vehicles/Hatchback.png"
            alt="car"
          />
        </div>
        <div className="flex flex-col text-end">
          <div className="text-gray-500 text-xl font-semibold">Khan</div>
          <div className="text-2xl font-bold">AYC-3324</div>
          <div className="text-gray-500 text-lg">White Honda Civic</div>
          <div className="text-gray-700">&#9733;4.9 </div>
        </div>
      </div>
      <hr />
      <div className="w-full flex justify-start items-center gap-4  h-16 rounded-xl p-2 my-2">
        <h2 className="rounded-full w-10 flex justify-center items-center">
          <i className="ri-map-pin-range-fill text-3xl"></i>
        </h2>
        <div>
          <h4 className="text-xl font-bold">Street 131 house 21</h4>
          <p className="text-lg text-gray-500">G13/4 Islamabad, pakistan</p>
        </div>
      </div>
    </div>
  );
};

export default WaitForDriver;
