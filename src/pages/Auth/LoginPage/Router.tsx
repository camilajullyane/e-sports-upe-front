import { Route, Routes } from "react-router";
import { RouteNotFound } from "@/routes/error/RouteNotFound";
import { HomePage } from "@/pages/Home";

export function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
