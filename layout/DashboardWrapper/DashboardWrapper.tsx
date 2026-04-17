import React from "react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <div className="flex ">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Header at the top */}
        <DashboardHeader title="Dashboard" />

        {/* Scrollable Content Area */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardWrapper;
