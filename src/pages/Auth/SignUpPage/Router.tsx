import { Route, Routes } from "react-router";
import { SignUpPage } from ".";
import { RouteNotFound } from "@/routes/error/RouteNotFound";

export function Router() {
  return (
    <Routes>
      <Route index element={<SignUpPage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
