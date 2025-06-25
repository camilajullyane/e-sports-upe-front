import { Outlet } from "react-router";
import { Sidebar } from "@/customComponents/Sidebar";

export function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* <div className="w-40 sm:w-48 md:w-56 lg:w-64 bg-gray-800 text-white p-2">
        <Sidebar />
      </div> */}
      {/* <div className="flex-1 ml-4">
        <Outlet />
      </div> */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
