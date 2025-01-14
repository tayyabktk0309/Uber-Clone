import React from "react";

const UserLogin = () => {
  return (
    <div>
      <form action="">
        <h3 className="text-xl mb-2">What's you email</h3>
        <input type="email" required placeholder="example@gmail.com" />
        <h3>Enter password</h3>
        <input type="password" required placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
