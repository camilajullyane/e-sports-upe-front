import { Route, Routes } from "react-router";
import { LoginPage } from ".";
import { RouteNotFound } from "@/routes/error/RouteNotFound";

export function Router() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
