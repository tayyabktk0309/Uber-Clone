import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtectWrap = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        if (!token) {
          navigate("/login");
        }
      }, [token, navigate]);
    
      if (!token) {
        return null; 
      }
  return (
    <>{children}</>
  )
}

export default UserProtectWrap