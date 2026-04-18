"use client";

import DashboardWrapper from "@/layout/DashboardWrapper/DashboardWrapper";
import { getCurrentUser } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Dashboard() {

  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();

    if (!user) {
      router.push("/auth/login");
    }
  }, [])

  return <DashboardWrapper>Welcome to dashboard</DashboardWrapper>;
}

export default Dashboard;
