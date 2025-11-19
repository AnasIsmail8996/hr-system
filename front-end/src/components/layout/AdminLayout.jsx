import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Navbar from "./Navbar";

export default function AdminLayout() {
  const [activeComponent, setActiveComponent] = useState(<div>Welcome Admin!</div>);

  return (
    <div className="flex w-full">

      <AdminSidebar onSelect={(comp) => setActiveComponent(comp)} />

      
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Navbar />
        <main className="p-6">
          {activeComponent}
        </main>
      </div>
    </div>
  );
}

