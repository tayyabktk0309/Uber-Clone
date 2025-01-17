import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { toast } from "react-toastify";

const CaptainSignup = () => {
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const [error, setError] = useState(true);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const FormSubmitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicletype: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newCaptain
    );

    if (response.status === 200) {
      const data = await response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
      toast.success("Captain Register Successfull.", {
        pauseOnHover: false,
        autoClose: 1000,
      });
    }
    // else {
    // setInterval(() => {
    //   setError(true);
    // }, 2000);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        {error ? (
          ""
        ) : (
          <div className="bg-gray-700 text-white text-center absolute border-black p-4">
            Captain Email Already exist. try another
          </div>
        )}
      </div>
      <div>
        <img
          className="w-14 mb-5"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="not found"
        />
        <form action="" onSubmit={FormSubmitHandler}>
          <h3 className="text-base font-medium">What's our Captain's name</h3>
          <div className="flex gap-5 mb-3">
            <input
              type="text"
              className="bg-[#eeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-sm"
              required
              placeholder="Enter first name"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              className="bg-[#eeee] rounded px-4 py-2 w-1/2 text-base placeholder:text-sm"
              required
              placeholder="Enter last name"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <h3 className="text-base font-medium">What's Email</h3>
          <input
            type="email"
            className="bg-[#eeee] rounded px-4 py-2 w-full text-base mb-3"
            required
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-base font-medium">Enter password</h3>
          <input
            type="password"
            className="bg-[#eeee] mb-3 rounded px-4 py-2 w-full text-base placehoder:text-sm"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="mb-5">
            <h3 className="text-base mb-2 font-medium">
              Vechicle Information's
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                className="bg-[#eeee] rounded px-4 py-2 w-full text-base placehoder:text-sm"
                required
                placeholder="Color"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
              <input
                type="text"
                className="bg-[#eeee] rounded px-4 py-2 w-full text-base placehoder:text-sm"
                required
                placeholder="Plate"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
              <input
                type="number"
                className="bg-[#eeee] rounded px-4 py-2 w-full text-base placehoder:text-sm"
                required
                placeholder="Capacity"
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
              <select
                className="bg-[#eeee] rounded px-4 py-2 w-full text-base text-gray-400 placehoder:text-sm"
                required
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="bicycle">Bicycle</option>
              </select>
            </div>
          </div>
          <button className="text-xl flex items-center gap-2 justify-center w-full bg-black text-white py-3 rounded mt-3">
            Captain Register
          </button>
        </form>
        <span className="flex justify-center pt-1 mb-5">
          Already Have Account?
          <NavLink className="text-blue-600 pl-1 " to={"/captain-login"}>
            Login Here
          </NavLink>
        </span>
      </div>
      <div>
        <p className="text-[12px] leading-tight text-gray-400">
          This site is protected by reCAPTCHA and the Google
          <span className="text-black underline">Privacy Policy</span> and
          <span className="text-black underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
