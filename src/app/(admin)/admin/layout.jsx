"use client"

import React, { useEffect } from "react";
import Sidebar from "./_components/sidebar";
import Topbar from "./_components/topbar";
import Cookies from "js-cookie";
import jwtDecode from "jsonwebtoken";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();
  const getTokenData = (token) => {
    try {
      const decoded = jwtDecode.decode(token);
      return decoded;
    } catch (err) {
      console.error("Invalid token:", err);
      return null;
    }
  };
  
  useEffect(() => {
    const token = Cookies.get("authToken");

    if (!token) {
      router.push("/"); 
      return;
    }

    const userData = getTokenData(token);
    // console.log(userData, "dfgyujk")
    if (!userData || userData.role !== "admin") {
      // console.log("Not an admin, redirecting to home page.");
      router.push("/"); // Redirect if not admin
    }
  }, [router]);
  
  
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
