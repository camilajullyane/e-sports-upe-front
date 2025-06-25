import { Route, Routes } from "react-router";
import { TeamPage } from ".";
import { RouteNotFound } from "@/routes/error/RouteNotFound";

export function Router() {
  return (
    <Routes>
      <Route index element={<TeamPage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
