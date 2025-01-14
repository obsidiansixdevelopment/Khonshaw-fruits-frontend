import React from "react";
import Sidebar from "./_components/sidebar";
import Topbar from "./_components/topbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Topbar />
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
