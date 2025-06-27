import { Outlet } from "react-router";
import { Sidebar } from "@/customComponents/Sidebar";

export function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <div className="flex justify-center w-20">
        <Sidebar />
      </div>
      <div className="flex-1 ml-4">
        <Outlet />
      </div>
    </div>
  );
}
