import { Route, Routes } from "react-router";
import { HomePage } from ".";
import { RouteNotFound } from "@/routes/error/RouteNotFound";

export function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
