import { Route, Routes } from "react-router";
import { Championship } from ".";
import { RouteNotFound } from "@/routes/error/RouteNotFound";

export function Router() {
  return (
    <Routes>
      <Route index element={<Championship />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
