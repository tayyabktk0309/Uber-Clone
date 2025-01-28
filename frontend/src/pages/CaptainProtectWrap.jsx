import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import Loader from "../components/Loader";

const CaptainProtectWrap = ({ children }) => {
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token, navigate]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        setIsloading(false);
      }
    })
    .catch((error) => {
      console.error("Profile fetch failed:", error);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });
    if (isLoading) {
      return <div><Loader/></div>;
    }
  return <>{children}</>;
};

export default CaptainProtectWrap;
