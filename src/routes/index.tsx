import { Routes, Route, Navigate } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "../pages/Auth/LoginPage";

export function Router() {
  const authRoutes = (
    <Route element={<PublicRoute />}>
      <Route index element={<Navigate to="login" />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  );

  return <Routes>{authRoutes}</Routes>;
}
