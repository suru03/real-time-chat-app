import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">REAL CHAT</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/13743846/pexels-photo-13743846.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Suraj</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
