import Sidebar from "./Sidebar";
import AdminSidebar from "./AdminSidebar";
import Navbar from "./Navbar";
import { useAuth } from "../../hooks/useAuth.js";
import { useState } from "react";
import AdminDashboard from "../../pages/admin/AdminDashboard.jsx";

export default function Layout() {
  const { user } = useAuth();
  const [activeComponent, setActiveComponent] = useState(<div>Welcome Admin!</div>);

  return (
    <div className="flex w-full">

      {user?.role === "admin" ? (
        <AdminSidebar onSelect={(comp) => setActiveComponent(comp)} />
      ) : (
        <Sidebar />
      )}

     
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Navbar />
        <main className="p-6">
          {user?.role === "admin" ? activeComponent : <><AdminDashboard /></>}
         
        </main>
      </div>
    </div>
  );
}   