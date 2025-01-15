import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const FormSubmitHandler = async (e) => {
    e.preventDefault();
    const newUser = { email: email, password: password };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      newUser
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
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
        <span className="flex justify-center mt-3">
          New here?
          <NavLink className="text-blue-600 pl-1 " to={"/signup"}>
            Create new Account
          </NavLink>
        </span>
      </div>
      <div>
        <NavLink
          to={"/captain-login"}
          className="text-xl flex items-center gap-2 justify-center w-full bg-[#8fce00] text-black py-3 rounded mt-5 font-medium"
        >
          Sign in as Captain
        </NavLink>
      </div>
    </div>
  );
};

export default UserLogin;
