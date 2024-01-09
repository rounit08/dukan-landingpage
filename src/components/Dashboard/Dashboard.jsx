import React from "react";
import Navbar from "../navbar/Navbar";
import "./Dashboard.css";
import MainDashboard from "./MainDashboard/MainDashboard";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <MainDashboard />
    </div>
  );
}

export default Dashboard;
