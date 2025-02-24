import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import Loader from "../components/Loader";
import axios from "axios";

const UserProtectWrap = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isLoading, setIsloading] = useState(true);
  const { user, setUser } = useContext(UserDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setUser(data.captain);
        setIsloading(false);
      }
    })
    .catch((error) => {
      console.error("Profile fetch failed:", error);
      localStorage.removeItem("token");
      navigate("/login");
    });

  if (isLoading) {
    return <div><Loader/></div>;
  }
  return <>{children}</>;
};

export default UserProtectWrap;
