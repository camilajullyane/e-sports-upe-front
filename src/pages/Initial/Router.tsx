import { Route, Routes } from "react-router";
import { InitialPage } from ".";
import { RouteNotFound } from "@/routes/error/RouteNotFound";

export function Router() {
  return (
    <Routes>
      <Route index element={<InitialPage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
