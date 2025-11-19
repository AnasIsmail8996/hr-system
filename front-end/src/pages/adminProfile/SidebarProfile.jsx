import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User, Settings, Bell, HelpCircle, Info } from "lucide-react";
import { assets } from "../../assets/assets_frontend/assets.js";
import { LogOut } from "lucide-react";
import FAQ from "./FAQ.jsx";
const SidebarProfile = () => {
  const navItems = [
    { id: "profile", label: "My Profile", icon: User, path: "/profile" },
    { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
    { id: "notifications", label: "Notifications", icon: Bell, path: "/notifications" },
    { id: "faq", label: "FAQ", icon: HelpCircle, path: "/faq" },
    { id: "about", label: "About App", icon: Info, path: "/about" },
  ];

const navigate=useNavigate()

const logout = () => {
  localStorage.removeItem("token");
navigate("/login")
};


  return (
          <>
    <div className="w-64 bg-white shadow-lg h-screen p-5 space-y-4 border-r">
      <div className="relative cursor-pointer flex items-center gap-2">
          <img
            src={assets.about_image}
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300 hover:ring-2 hover:ring-blue-400 transition-all"
          />
          <div className="flex flex-col justify-center items-start ml-2">
            <h4 className="text-sm font-medium">Anas Ismail</h4>
            <span className="text-xs text-gray-500">Business Owner</span>
          </div>
        </div>
   <hr />   
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg cursor-pointer font-medium transition 
              ${isActive ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            {item.label}
          </NavLink>
        );
      })}


<button
  onClick={logout}
  className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition"
>
  <LogOut className="w-5 h-5" />
  Logout
</button>

    </div>
      </>
  );
};

export default SidebarProfile;
