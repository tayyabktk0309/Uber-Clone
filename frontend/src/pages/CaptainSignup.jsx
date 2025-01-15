import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CaptainSignup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captainLoginData, setCaptainLoginData] = useState({});
  const FormSubmitHandler = (e) => {
    e.preventDefault();
    setCaptainLoginData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-14 mb-5"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="not found"
        />
        <form action="" onSubmit={FormSubmitHandler}>
          <h3 className="text-base mb-2 font-medium">What's our Captain's name</h3>
          <div className="flex gap-5 mb-5">
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
          <h3 className="text-base mb-2 font-medium">What's Email</h3>
          <input
            type="email"
            className="bg-[#eeee] rounded px-4 py-2 w-full text-base mb-5"
            required
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-base mb-2 font-medium">Enter password</h3>
          <input
            type="password"
            className="bg-[#eeee] mb-5 rounded px-4 py-2 w-full text-base placehoder:text-sm"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="text-xl flex items-center gap-2 justify-center w-full bg-black text-white py-3 rounded mt-3">
            Register
          </button>
        </form>
        <span className="flex justify-center pt-1">
          Already Have Account?
          <NavLink className="text-blue-600 pl-1 " to={"/captain-login"}>
            Login Here
          </NavLink>
        </span>
      </div>
      <div>
        <p className="text-[12px] leading-tight text-gray-400">
          This site is protected by reCAPTCHA and the Google <span className="text-black underline">Privacy Policy</span> and
          <span className="text-black underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
