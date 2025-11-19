import React from "react";
import { LuPlus, LuSearch } from "react-icons/lu";

import user1 from "../../components/images/user-1.png";
import user2 from "../../components/images/user-2.png";
import user3 from "../../components/images/user-3.png";
import user4 from "../../components/images/user-4.png";
import user5 from "../../components/images/user-5.png";
import user6 from "../../components/images/user-6.png";

const users = [
  { id: 1, img: user1, name: "Florence Shaw", email: "florencesha@gmail.com", access: "Data export", accessTwo: "Data import", lastActive: "2h ago", dateAdded: "12 Jan 2025" },
  { id: 2, img: user2, name: "David Parker", email: "david.parker@example.com", access: "Data export", accessTwo: "Data import", lastActive: "5h ago", dateAdded: "10 Jan 2025" },
  { id: 3, img: user3, name: "Sarah Lee", email: "sarahlee@example.com", access: "Data export", accessTwo: "Data import", lastActive: "1 day ago", dateAdded: "8 Jan 2025" },
  { id: 4, img: user4, name: "Michael Carter", email: "michael.carter@example.com", access: "Data export", accessTwo: "Data import", lastActive: "3 days ago", dateAdded: "5 Jan 2025" },
  { id: 5, img: user5, name: "Emma Davis", email: "emma.davis@example.com", access: "Data export", accessTwo: "Data import", lastActive: "4 days ago", dateAdded: "3 Jan 2025" },
  { id: 6, img: user6, name: "Daniel Kim", email: "daniel.kim@example.com", access: "Data export", accessTwo: "Data import", lastActive: "1 week ago", dateAdded: "1 Jan 2025" },
];

const getAccessBadgeStyle = (type) => {
  switch (type) {
    case "Data export":
      return "bg-[#4192FD] text-white";
    case "Data import":
      return "bg-[#976DBC] text-white";
    default:
      return "bg-blue-100 text-blue-700";
  }
};

const AdminUserManagement = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h3 className="text-2xl font-bold text-gray-800">
            All Users <span className="text-blue-600 ml-2">({users.length})</span>
          </h3>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">

            {/* Search */}
            <div className="relative w-full sm:max-w-xs lg:max-w-[300px]">
              <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 
                rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 
                placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Add User */}
            <button
              className="w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded-xl 
              font-medium shadow-md border border-gray-900 hover:bg-black"
            >
              + Add User
            </button>
          </div>
        </div>

        {/* TABLE BOX */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">

          {/* Header */}
          <div className="grid grid-cols-4 px-2 py-3 border-b border-gray-300 font-semibold text-gray-600">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span>User Name</span>
            </div>
            <p>Access</p>
            <p>Last active</p>
            <p>Date added</p>
          </div>

          {/* USER ROWS */}
          <div className="divide-y divide-gray-200">
            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-4 py-4 px-2 items-center hover:bg-gray-50 transition"
              >

                {/* USER INFO */}
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <img src={user.img} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <h5 className="font-medium text-gray-800">{user.name}</h5>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                </div>

                {/* ACCESS BADGES (TWO BUTTONS) */}
                <div className="flex gap-2">
                  {/* Data Export */}
                  <span
                    className={`${getAccessBadgeStyle(user.access)} px-3 py-1 rounded-lg text-sm font-medium`}
                  >
                    {user.access}
                  </span>

                  {/* Data Import */}
                  <span
                    className="px-3 py-1 rounded-lg text-sm font-medium bg-[#976DBC] text-white"
                  >
                    {user.accessTwo}
                  </span>

                
                </div>

                {/* LAST ACTIVE */}
                <p className="text-gray-600">{user.lastActive}</p>

                {/* DATE ADDED */}
                <p className="text-gray-600">{user.dateAdded}</p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminUserManagement;
