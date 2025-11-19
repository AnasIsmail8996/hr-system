import React from "react";
import SidebarProfile from "./SidebarProfile";
import { Outlet } from "react-router-dom";

const AdminProfileLayout = () => {
  return (
    <div className="flex h-screen">
      <SidebarProfile />

      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminProfileLayout;

