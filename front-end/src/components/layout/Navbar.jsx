import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import alertIcon from "../images/Frame 33853.png";
import { useAuth } from '../../hooks/useAuth.js'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // useAuth se user aur logout le lo
  const navigate = useNavigate();

  const renderUserMenu = () => (
    <div className="relative cursor-pointer flex items-center gap-2">
      {user?.imageUrl ? (
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-10 h-10 rounded-full border border-gray-300 hover:ring-2 hover:ring-blue-400 transition-all"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
      )}
      <div className="flex flex-col justify-center items-start ml-2">
        <h4 className="text-sm font-medium">{user?.name}</h4>
        <span className="text-xs text-gray-500">{user?.role}</span>
      </div>
      <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
    </div>
  );

  return (
    <nav className="w-full shadow-sm bg-white px-6 py-3 flex items-center justify-between sticky top-0 z-30">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <h4 className="text-lg font-bold">Admin</h4>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-end gap-6 mx-8">
        <div className="relative flex-1 max-w-[500px]">
          <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border bg-[#FBFAFA] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            src={alertIcon}
            alt="Alert"
            className="w-10 h-10 cursor-pointer hover:scale-110 transition"
          />
          {user ? (
            renderUserMenu()
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-700 text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 text-gray-800 font-medium shadow-md md:hidden">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>All Doctors</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          {user ? (
            <>
              <p onClick={() => { navigate("/my-profile"); setMenuOpen(false); }}>My Profile</p>
              <p onClick={() => { navigate("/my-appointments"); setMenuOpen(false); }}>My Appointments</p>
              <p onClick={() => { logout(); setMenuOpen(false); }} className="text-red-500">Logout</p>
            </>
          ) : (
            <button
              onClick={() => { navigate("/login"); setMenuOpen(false); }}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
