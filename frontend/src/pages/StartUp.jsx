import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const StartUp = () => {
  return (
    <div>
      <div className="bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-bottom h-screen w-full flex justify-between flex-col pt-8">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold ">Get Start With Uber</h2>
          <NavLink
            to={"/login"}
            className="text-xl flex items-center gap-2 justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue <span className="mt-1"> <FaArrowRight /></span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default StartUp;
