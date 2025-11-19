import React, { useState } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import {
  HomeOutlined,
  FileTextOutlined,
  TeamOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import drawerIcon from "../images/Vector.png";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminClients from "../../pages/admin/AdminClients";
import AdminTemplates from "../../pages/admin/AdminTemplates";
import AdminUserManagement from "../../pages/admin/AdminUserManagement";
import AdminCreateQuotation from "../../pages/admin/AdminCrateQuotation";
import { assets } from "../../assets/assets_frontend/assets.js";
import { useNavigate } from "react-router-dom";
const AdminSidebar = ({ onSelect }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
const navigate = useNavigate();


  const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <HomeOutlined />,
      component: <AdminDashboard />,
    },
    {
      key: "create-quotation",
      label: "Create Quotation",
      icon: <PlusOutlined />,
      component: <AdminCreateQuotation />,
    },
    {
      key: "client-list",
      label: "Client List",
      icon: <TeamOutlined />,
      component: <AdminClients />,
    },
    {
      key: "templates",
      label: "Templates",
      icon: <SettingOutlined />,
      component: <AdminTemplates />,
    },
    {
      key: "user-management",
      label: "User Management",
      icon: <TeamOutlined />,
      component: <AdminUserManagement />,
    },
  ];

  const handleMenuClick = (key) => {
    setActiveMenu(key);
    const item = menuItems.find((i) => i.key === key);
    if (onSelect && item) {
      onSelect(item.component);
    }
  };

  return (
    <>
    <div
      className={`bg-white  text-[#181D27] h-screen  mt-9 transition-all duration-300 ${
        collapsed ? "w-16" : "w-72"
      } flex flex-col`}
    >
      {/* Collapse button */}
      <div
        className="p-4  cursor-pointer flex justify-end"
        onClick={() => setCollapsed(!collapsed)}
      >
        <HiChevronDoubleRight
          size={30}
          className={`text-[#181D27] transition-transform duration-300 ${
            collapsed ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      {/* Logo */}
      {!collapsed && (
        <div className="flex items-center gap-4 px-6 mb-8 ">
          <img src={drawerIcon} alt="Logo" className="w-8" />
          <h1 className="text-2xl font-bold">SD Quotation</h1>
        </div>
      )}

      {/* Menu Items */}
      <div className="flex flex-col gap-2 p-6 mt-6">
        {menuItems.map((item) => (
          <button
          key={item.key}
          onClick={() => handleMenuClick(item.key)}
            className={`flex items-center gap-3 p-6 rounded transition-colors mx-2
              ${
                activeMenu === item.key
                  ? "bg-[#1C2730] text-white"
                  : "text-[#181D27]"
              }
              hover:bg-[#008CFF] 
              hover:text-white
              ${collapsed ? "justify-center" : "justify-start"}
            `}
          >
            <span
              className={`${
                activeMenu === item.key ? "text-white" : "text-[#181D27]"
              }`}
            >
              {item.icon}
            </span>
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </div>
<hr />

     <div   onClick={() => navigate("/profile")} className="relative cursor-pointer flex justify-start items-center ml-6 gap-4 mt-15 ">
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





  
    </div>
    
        </>
  );
};

export default AdminSidebar;
