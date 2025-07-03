import { Outlet } from "react-router";
import { Sidebar } from "@/customComponents/Sidebar";
import { CustomBreadCrumbs } from "@/customComponents/CustomBreadCrumbs";
import { useLocation } from "react-router";

export function MainLayout() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen">
      <div className="flex justify-center w-[5vw]">
        <Sidebar />
      </div>
      <div className="flex-1 p-3 w-[calc(95vw-0.75rem)]">
        <CustomBreadCrumbs path={location.pathname} />
        <Outlet />
      </div>
    </div>
  );
}
