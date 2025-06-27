import { Route, Routes } from "react-router";
import { RouteNotFound } from "@/routes/error/RouteNotFound";
import { LoginPage } from "@/pages/Auth/LoginPage";

export function Router() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
