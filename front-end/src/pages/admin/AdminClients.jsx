import React from "react";
import { ArrowUpOutlined, SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { Tag } from "antd"; // Assuming Ant Design components are available for the Tag component

// Placeholder URLs for images (Replace these with your actual imported paths)
const IMAGE_PLACEHOLDERS = {
  cancleIcon: "https://placehold.co/32x32/ff4d4f/ffffff?text=X", // Red Cancel
  right: "https://placehold.co/32x32/52c41a/ffffff?text=✓",    // Green Check
  tIcon: "https://placehold.co/32x32/1890ff/ffffff?text=$",    // Blue Total
  user: "https://placehold.co/32x32/faad14/ffffff?text=U",     // Yellow User
};

const AdminClients = () => {
  const cardData = [
    {
      title: "Total Clients",
      value: "12",
      icon: IMAGE_PLACEHOLDERS.user,
      percentage: "+2%",
      change: "vs last week",
    },
    {
      title: "Approved Quotation",
      value: "5",
      icon: IMAGE_PLACEHOLDERS.right,
      percentage: "+5%",
      change: "vs last week",
    },
    {
      title: "Rejected Quotation",
      value: "3",
      icon: IMAGE_PLACEHOLDERS.cancleIcon,
      percentage: "-1%",
      change: "vs last week",
    },
    {
      title: "Total Value",
      value: "$15,000",
      icon: IMAGE_PLACEHOLDERS.tIcon,
      percentage: "+3%",
      change: "vs last week",
    },
  ];

  const clientData = [
    { id: 1, name: "James Carter", company: "Granite Solutions", phone: "+1 202 555 0143", status: "Approved", date: "11-02-2025", amount: "$100" },
    { id: 2, name: "Maria Garcia", company: "Tech Innovate", phone: "+1 202 555 0144", status: "Rejected", date: "11-02-2025", amount: "$100" },
    { id: 3, name: "John Smith", company: "Alpha Systems", phone: "+1 202 555 0145", status: "Approved", date: "11-02-2025", amount: "$100" },
    { id: 4, name: "Emily Davis", company: "Beta Corp", phone: "+1 202 555 0146", status: "Rejected", date: "11-02-2025", amount: "$100" },
    { id: 5, name: "Robert Jones", company: "Global LLC", phone: "+1 202 555 0147", status: "Approved", date: "11-02-2025", amount: "$100" },
    { id: 6, name: "Patricia Brown", company: "Digital X", phone: "+1 202 555 0148", status: "Rejected", date: "11-02-2025", amount: "$100" },
    { id: 7, name: "Michael Wilson", company: "Fusion Inc.", phone: "+1 202 555 0149", status: "Approved", date: "11-02-2025", amount: "$100" },
  ];

  // Function to render status tag with Tailwind classes
  const renderStatusTag = (status) => {
    const isApproved = status === "Approved";
    return (
      <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
        isApproved
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      }`}>
        {status}
      </span>
    );
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      
      {/* -------------------- 1. Dashboard Cards -------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 transition duration-300 ease-in-out hover:shadow-2xl"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {card.title}
              </h4>
              {/* Using image icons */}
              <img src={card.icon} alt={card.title} className="w-6 h-6 object-contain opacity-70" />
            </div>

            {/* Card Value */}
            <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{card.value}</h1>

            {/* Percentage and Change */}
            <div className="flex items-center space-x-2">
              <span
                className={`flex items-center text-xs font-bold px-2 py-0.5 rounded-full ${
                  card.percentage.startsWith("+") 
                    ? "bg-green-100 text-green-600" 
                    : "bg-red-100 text-red-600"
                }`}
              >
                {/* Use Ant Design ArrowUpOutlined (since ArrowDownOutlined is not imported, we style based on the prefix) */}
                {card.percentage.startsWith("+") && <ArrowUpOutlined className="mr-1" />}
                {!card.percentage.startsWith("+") && <span className="mr-1 rotate-180 inline-block">↓</span>} 
                {card.percentage}
              </span>
              <h6 className="text-xs text-gray-500">{card.change}</h6>
            </div>
          </div>
        ))}
      </div>

      {/* -------------------- 2. Client Data Table (Image Replication) -------------------- */}

      <div className="bg-white shadow-xl rounded-xl p-6">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          
          {/* Filters (Left Side) */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition">
              <FilterOutlined /> Filter
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-100 border border-blue-300 rounded-full">
              Clients: Smith Jones <button className="ml-1 text-blue-600 hover:text-blue-800">x</button>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 text-sm bg-green-100 border border-green-300 rounded-full">
              Status: Approved <button className="ml-1 text-green-600 hover:text-green-800">x</button>
            </div>
          </div>
          
          {/* Search (Right Side) */}
          <div className="relative w-full md:w-64">
            <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                <th scope="col" className="px-6 py-3">Client Name</th>
                <th scope="col" className="px-6 py-3">Company name</th>
                <th scope="col" className="px-6 py-3">Phone Number</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clientData.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {renderStatusTag(client.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right">{client.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination/Result Footer */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            Show 
            <select className="border border-gray-300 rounded-md p-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="ml-2">off 800 Results</span>
          </div>
          <button className="text-blue-600 font-medium hover:text-blue-800 transition">See More</button>
        </div>
      </div>
    </div>
  );
};

export default AdminClients;