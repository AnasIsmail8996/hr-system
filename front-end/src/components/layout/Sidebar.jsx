import React, { useState } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import drawerIcon from "../images/Vector.png";
import { PlusOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(false);


  return (
    <div
      className={`bg-[#FFFFFF] text-[#181D27] h-screen transition-width duration-300 ${
        collapsed ? "w-16" : "w-72"
      } flex flex-col`}
    >
      {/* Toggle Button */}
      <div
        className="p-4 cursor-pointer flex justify-end"
        onClick={() => setCollapsed(!collapsed)}
      >
        <HiChevronDoubleRight
          size={30}
          className={`text-[#181D27] transition-transform duration-300 ${
            collapsed ?   "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      {!collapsed && (
        <div className="flex items-center gap-4 px-4 mb-8">
          <img src={drawerIcon} alt="" className="w-8" />
          <h1 className="text-2xl font-bold">SD Quotation</h1>
        </div>
      )}

      <div className="flex flex-col gap-4 px-4">
        <button
          className="flex items-center gap-3 p-3 rounded hover:bg-[#008CFF] transition-colors"
        >
          <PlusOutlined style={{ fontSize: 20 }} />
          {!collapsed && <span>Create Quotation</span>}
        </button>

<button
  onClick={() => setActive(true)}
  className={`flex items-center gap-3 p-3 rounded transition-colors
    hover:bg-[#008CFF]
    ${active ? "bg-[#1C2730] text-[#FFFFFF]" : ""}
  `}
>
  <PlusOutlined style={{ fontSize: 20 }} />
  {!collapsed && <span>Create Quotation</span>}
</button>


      </div>
    </div>
  );
};

export default Sidebar;
