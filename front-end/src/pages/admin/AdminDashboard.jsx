import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { 
  AiOutlineFileText, 
  AiOutlineClockCircle, 
  AiOutlineUserAdd, 
  AiOutlineArrowUp 
} from "react-icons/ai"; 
import { EditOutlined, DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";
const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.email || "Admin";

  // Data for the cards
  const cardData = [
    {
      title: "Total Quotations",
      value: "12",
      icon: <AiOutlineFileText className="text-2xl text-blue-500" />,
      percentage: "+2%",
      change: "vs last week",
      color: "bg-blue-500",
    },
    {
      title: "Pending Quotations",
      value: "5",
      icon: <AiOutlineClockCircle className="text-2xl text-yellow-500" />,
      percentage: "+5%",
      change: "vs last week",
      color: "bg-yellow-500",
    },
    {
      title: "New Clients",
      value: "3",
      icon: <AiOutlineUserAdd className="text-2xl text-green-500" />,
      percentage: "-1%",
      change: "vs last week",
      color: "bg-red-500",
    },
  ];
  const clients = [
    { id: 1, name: "Anas", date: "2025-11-17", total: "$500", status: "Active" },
    { id: 2, name: "Ali", date: "2025-11-15", total: "$300", status: "Pending" },
    { id: 3, name: "Sara", date: "2025-11-14", total: "$200", status: "Completed" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">{`Welcome ${userName}`} 😅😅</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] shadow-lg rounded-xl p-6 transition duration-300 ease-in-out hover:shadow-2xl"
          >
            {/* Card Header */}
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
                {card.title}
              </h4>
              {card.icon}
            </div>

            {/* Card Value */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{card.value}</h1>

            {/* Percentage and Change */}
            <div className="flex items-center space-x-2">
              <span
                className={`flex items-center justify-center h-8 w-16 text-xs font-bold text-white rounded-full ${
                  card.percentage.startsWith("+") ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {card.percentage.startsWith("+") && (
                  <AiOutlineArrowUp className="mr-1" />
                )}
                {card.percentage}
              </span>

              <h6 className="text-sm text-gray-500">{card.change}</h6>
            </div>
          </div>
        ))}
      </div>

  <div className="overflow-x-auto mt-9">
  <table className="min-w-full text-left border-collapse">
    <thead className="bg-[#F4F4F4]">
      <tr>
        <th className="px-4 py-4 border-b">#</th>
        <th className="px-4 py-4 border-b">Client Name</th>
        <th className="px-4 py-4 border-b">Date</th>
        <th className="px-4 py-4 border-b">Total Amount</th>
        <th className="px-4 py-4 border-b">Status</th>
        <th className="px-4 py-4 border-b">Action</th>
        <th className="px-4 py-4 border-b text-blue-600 underline cursor-pointer">
          View All
        </th>
      </tr>
    </thead>

    <tbody>
      {clients.map((client, index) => (
        <tr key={client.id} className="hover:bg-gray-50">
          <td className="px-4 py-5 border-b">{index + 1}</td>
          <td className="px-4 py-5 border-b">{client.name}</td>
          <td className="px-4 py-5 border-b">{client.date}</td>
          <td className="px-4 py-5 border-b">{client.total}</td>

          {/* Status Button */}
          <td className="px-4 py-2 border-b">
            <button
              className="px-3 py-1 rounded-lg font-medium text-sm"
              style={{
                backgroundColor: "#E4F4EA",
                color: "#12B76A",
                borderBottom: "3px solid #FFFFFF",
              }}
            >
              {client.status}
            </button>
          </td>

          {/* Action Icons */}
          <td className="px-4 py-2 border-b">
            <div className="flex items-center gap-2">
              <button >
                <EditOutlined  className="text-blue-500 hover:text-blue-700" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <DeleteOutlined />
              </button>
              <button className="text-green-500 hover:text-green-700">
                <ShareAltOutlined />
              </button>
            </div>
          </td>

          <td className="px-4 py-2 border-b text-center">—</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AdminDashboard;
