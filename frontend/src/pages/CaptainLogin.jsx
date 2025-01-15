import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captainData, setCaptainData] = useState({});
  const FormSubmitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-14 mb-3"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form action="" onSubmit={FormSubmitHandler}>
          <h3 className="text-lg mb-2 font-medium">What's you email</h3>
          <input
            type="email"
            className="bg-[#eeee] rounded px-4 py-2 w-full text-lg mb-3"
            required
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg mb-2 font-medium">Enter password</h3>
          <input
            type="password"
            className="bg-[#eeee] mb-7 rounded px-4 py-2 w-full text-lg placehoder:text"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="text-xl flex items-center gap-2 justify-center w-full bg-black text-white py-3 rounded mt-5">
            Login
          </button>
        </form>
        <span className="flex justify-center pt-1">
          Join a fleet?
          <NavLink className="text-blue-600 pl-1 " to={"/captain-signup"}>
            Register as a Captain
          </NavLink>
        </span>
      </div>
      <div>
        <NavLink
          to={"/login"}
          className="text-xl flex items-center gap-2 justify-center w-full bg-[#ce7e00] text-white py-3 rounded mt-5 font-medium"
        >
          Sign-in as User
        </NavLink>
      </div>
    </div>
  );
};

export default CaptainLogin;
